---
publishDate: 2024-11-11
title: Fix rm to long error
---

`rm -rf ./*.dat`

```bash
find . -name "*.rst" -print0 -exec echo {} +
find . -name "*.rst" -print0 -exec rm -f {} +
```
