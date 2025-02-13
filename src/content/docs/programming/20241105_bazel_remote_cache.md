---
title: Example using bazel-remote-cache to host packages
---

# Install and run bazel-remote build cache

```bash
/opt/homebrew/bin/bazel-remote --max_size 1000 \
--dir /Users/cs/bazel_cache --profile_host 127.0.0.1 \
--profile_port 8000 --enable_endpoint_metrics
```

As before our tarball will be essentially blank consisting of one file
in a .tar.gz zip

# Confirm working

```bash
curl http://localhost:8080/status
```

# Upload tarball

```bash
sha256sum my-generic-package.tar.gz
curl http://localhost:8080/cache/cas/c8bd358bd7eaa09bc206d3e6140c5cfcc5fdb90a0c0799155427ab75a519f123 --upload-file my-generic-package.tar.gz
```

# Download generic tarball

```bash
curl -o ./generic.tar.gz http://localhost:8080/cache/cas/5f4f12461a593abdff2a279e72697574b2086ace76def0adc9db593ff8e5354f
```

# my-generic-package contents: package.json

```json
{
  "name": "my-generic-package",
  "version": "1.0.1",
  "description": "A generic package tarball",
  "main": "index.js",
  "files": ["files/my-tarball.tgz"]
}
```
