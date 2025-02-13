---
title: Example Bundling of Package with NPM
---

# Install Verdaccio

```bash
npm install verdaccio
verdaccio
```

# Create example package

```bash
head -c 100M </dev/urandom > myfile

mkdir -p myPackage/files/
tar -czf ./myPackage/files/myPackage-1.0.0.tgz myfile
```

# Create package.json file inside myPackage

```JSON
{
"name": "myPackage",
"version": "1.0.0",
"description": "A generic package tarball",
"main": "index.js",
"files": [
  "files/myPackage-1.0.0.tgz"
]
}
```

# Package and upload to local npm server

```bash
npm pack myPackage
npm publish myPackage --registry http://localhost:4873
```

# Install and view package

```bash
npm install myPackage --registry http://localhost:4873
ls -grtha ./*myPackage*
```
