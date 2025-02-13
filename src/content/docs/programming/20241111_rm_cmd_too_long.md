---
subtitle: Fix rm to long error
title: Easy reference for find commands I come back to
---

`rm -rf ./*.dat`

```bash
find . -name "*.rst" -print0 -exec echo {} +
find . -name "*.rst" -print0 -exec rm -f {} +
```
