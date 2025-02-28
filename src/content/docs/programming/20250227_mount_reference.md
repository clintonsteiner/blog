---
publishDate: 2025-02-27
title: Mount Reference commands
---

## Mount Reference Commands

```bash
sudo dnf install cifs-utils
cd /mnt
mkdir samba
sudo vim /etc/fstab
sudo systemctl daemon-reload
//SERVER/share /mnt/samba cifs username=user,password=passwd 0 0
# ... where:
# “share” = the name of the network share
# “SERVER” = server’s name or IP address
# ”user” = your SAMBA username
# ”passwd” = your SAMBA password
```

## View Mounts

## Viewing Mounts

- **List mounts**: `mount` or `cat /proc/mounts`
- **Check disk usage**: `df -h`
- **Persistent mounts**: `/etc/fstab`

## Samba Mounts

1. **Install packages** (Ubuntu/Debian):
   ```bash
   sudo apt-get update
   sudo apt-get install cifs-utils
   ```
