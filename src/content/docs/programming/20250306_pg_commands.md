---
publishDate: 2025-3-06
title: Postgres useful commands
---

## View and reload HBA File

```sql
SHOW hba_file;
SHOW data_directory;
SELECT pg_reload_conf();

```

## pg_dump and pg_restore examples

```bash
pg_dump -Z 6 -F c db_name > /tmp/db_dump.dump
pg_restore -F c ./db_dump.dump -d db_name -v
```
