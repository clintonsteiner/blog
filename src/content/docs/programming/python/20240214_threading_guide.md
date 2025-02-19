---
publishDate: 2024-02-14
title: Threading python examples
---

## Basic Usage

```python
from threading import Thread
from time import sleep, time

def slowFunction(time=5):
    """Create example of a slow function"""
    sleep(time)

t0 = time()
threads = []

for i in range(10):
    t = Thread(target=slowFunction, args=(1,))
    t.start()
    threads.append(t)
for t in threads:
    t.join(timeout=15)
print(f"Finished in: {time()-t0}")

```

    Finished in: 1.0109996795654297

## ThreadPoolExecutor

```python

```
