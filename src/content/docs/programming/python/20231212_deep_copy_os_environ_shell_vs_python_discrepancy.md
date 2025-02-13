---
title: Investigating side-effect of using deepcopy to restore original os.environ state
---

```python
import os, subprocess

class StrHelpers:

    @classmethod
    def popenWithoutEnv(cls):
        print(f"""subprocess.Popen('echo $foo', shell=True): {subprocess.Popen('echo $foo', shell=True)}""")

    @classmethod
    def popenWithEnv(cls, env):
        print(f"""subprocess.Popen('echo $foo', shell=True, env=env): {subprocess.Popen('echo $foo', shell=True, env=env)}""")


```

## os.environ is loaded originally and becomes a stale copy of the original os env variables

- Taking a deepcopy of the os.environ variable creates a reference to the original os.environ

```python
"""Recreating the 'bug'"""
import os, copy

# pre-experiment assertions
os.environ['foo'] = 'foo'
StrHelpers.popenWithoutEnv()

# do mods
myEnv = copy.deepcopy(os.environ)
myEnv['foo'] = 'bar'

# what the shell sees
StrHelpers.popenWithoutEnv()
```

    subprocess.Popen('echo $foo', shell=True): <Popen: returncode: None args: 'echo $foo'>
    foo
    subprocess.Popen('echo $foo', shell=True): <Popen: returncode: None args: 'echo $foo'>
    bar

```python
import os, subprocess

class StrHelpers(StrHelpers):
    @classmethod
    def osEnvironFooLookup(cls):
        print(f"""os.environ['foo']: {os.environ['foo']}""")

    @classmethod
    def osEnvironFooGetEnv(cls):
        print(f"""os.getenv['foo']: {os.getenv('foo')}""")
```

## Odder still, looking up the os.environ value returns what we would deem correct

```python
import os, copy
# pre-experiment assertions
os.environ['foo'] = 'foo'
StrHelpers.popenWithoutEnv()


# do mods
myEnv = copy.deepcopy(os.environ)
myEnv['foo'] = 'bar'

# post-experiment examination
# what python thinks
StrHelpers.osEnvironFooLookup()
StrHelpers.osEnvironFooGetEnv()

# what the shell sees
StrHelpers.popenWithEnv(myEnv)
```

    foo
    subprocess.Popen('echo $foo', shell=True): <Popen: returncode: None args: 'echo $foo'>
    os.environ['foo']: foo
    os.getenv['foo']: foo
    subprocess.Popen('echo $foo', shell=True, env=env): <Popen: returncode: None args: 'echo $foo'>
    bar

```python
## There are two ways around this behavior
# os.environ.copy()
# Context managed modification
```

## 1. Use os.environ.copy to prevent this from occurring

```python
import os, copy
# pre-experiment assertions
os.environ['foo'] = 'foo'
StrHelpers.popenWithoutEnv()

# do mods
myEnv = os.environ.copy()
myEnv['foo'] = 'bar'

# post-experiment examination
# what python thinks
StrHelpers.osEnvironFooLookup()
StrHelpers.osEnvironFooGetEnv()

# what the shell sees
StrHelpers.popenWithEnv(myEnv)
```

    subprocess.Popen('echo $foo', shell=True): <Popen: returncode: None args: 'echo $foo'>
    os.environ['foo']: foo
    os.getenv['foo']: foo
    subprocess.Popen('echo $foo', shell=True, env=env): <Popen: returncode: None args: 'echo $foo'>
    foo
    bar

## 2. Use a contextmanager to control the modifications

```python
import os
from contextlib import contextmanager

@contextmanager
def modifiedEnv(*remove, **update):
    env = os.environ
    update = update or {}
    remove = remove or []

    envVarsToModifyBeforeTest = (set(update.keys()) | set(remove)) & set(env.keys())
    envVarsToRestoreOnExit = {var: env[var] for var in envVarsToModifyBeforeTest}
    envVarsToRemoveOnExit = frozenset(var for var in update if var not in env)

    env.update(update)
    [env.pop(var, None) for var in remove]
    yield

    env.update(envVarsToRestoreOnExit)
    [env.pop(var) for var in envVarsToRemoveOnExit]

"""Testing context managed solution"""
def printResults():
    StrHelpers.osEnvironFooLookup()
    StrHelpers.popenWithEnv(myEnv)

os.environ['foo'] = 'foo'

with modifiedEnv(foo='bar') as myEnv:
    print("Inside context manager modified environment")
    printResults()

print("Outside context managed modified environment")
printResults()
```

    Inside context manager modified environment
    os.environ['foo']: bar
    subprocess.Popen('echo $foo', shell=True, env=env): <Popen: returncode: None args: 'echo $foo'>
    Outside context managed modified environment
    os.environ['foo']: foo
    bar
    subprocess.Popen('echo $foo', shell=True, env=env): <Popen: returncode: None args: 'echo $foo'>
    foo
