---
publishDate: 2025-02-27
title: Mount Reference commands
---

## Mount Reference Commands

```bash
sudo dnf install cifs-utils
sudo vim /etc/fstab
sudo systemctl daemon-reload
//SERVER/share /mnt/samba cifs username=user,password=passwd 0 0
# ... where:
# “share” = the name of the network share
# “SERVER” = server’s name or IP address
# ”user” = your SAMBA username
# ”passwd” = your SAMBA password
```
