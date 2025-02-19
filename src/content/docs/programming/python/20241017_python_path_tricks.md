---
publishDate: 2024-10-17
title: PYTHONPATH Tricks
---

### What is PYTHONPATH

PYTHONPATH is an environment variable that defines where python looks for importable modules

In bash, running `echo $PYTHONPATH` will show you the current path

Python then adds the directories in that path to `sys.path` at runtime

### Handling of dependencies with multiple versions

If there are multiple versions of a package in `sys.path`, python searches `sys.path` in order and uses the first one found

#### Experiment

To prove this, setup the following scenario

File: ~/package1/package.py
def version():
return "Version 1"

File: ~/package2/package.py
def version():
return "Version 2"

bash: `PYTHONPATH=~/package1/package.py:~/package2/package.py python`
Inside the python interpreter: `import package; package.version()`
Output: Version 1

This makes sense, running `import sys; sys.path` shows us that package1 is listed first hence it was loaded

## Overriding default resolution behaviors

```python
### Changing default behavior, using path above, package.version() will output Version 1
import os
import sys
MODULE = 'package'

def printPackageVersion():
    import package
    print(f"Currently loaded package version {package.version()}")

if 'package' in sys.modules.keys():
    # If already imported from somewhere else, remove
    printPackageVersion()
    del sys.modules[MODULE]

# Changing to Version 2 of our package
# sys.path was ["", "package1" "package2"] but will be ["", "package2", "package1"] now
sys.path.insert(1, os.path.abspath("~/package2"))
printPackageVersion() # outputs Version2

# What if we wanted to use both versions of the package and use them both in the same file
import importlib.util
spec = importlib.util.spec_from_file_location('package', '~/package1/package.py')
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

mod.version() # Outputs Version 1
package.version() # Outputs Version 2

# What about overriding the already loaded version of the module with our new version
# Now our module versions are out of sync, to hack in Version 1 again globally
del sys.modules[MODULE]
sys.modules[MODULE] = mod

mod.version() # Outputs Version 1
package.version() # Outputs Version 1
```
