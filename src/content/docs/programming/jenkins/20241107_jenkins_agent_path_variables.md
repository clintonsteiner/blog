---
publishDate: 2024-11-07
title: Jenkins Troubleshooting Tips Related to Path Errors
---

# Agent paths for a user are derived seperately from the linux user path

So being ssh\'d into a machine and running echo \$PATH is not the true
output

Instead, run the following from the node side script console in the
Jenkins web gui

```groovy
println System.getenv("PATH")
```

These variables are cached, to get to reload you may have to disconnect
the node and relaunch it

# Update java version

```bash
sudo update-alternatives --config java
```

The above will set the java variables accordingly
