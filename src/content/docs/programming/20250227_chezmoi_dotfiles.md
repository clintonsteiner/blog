---
publishDate: 2025-02-27
title: Chezmoi Reference
---

## Using existing

```bash
# Install chezmoi
sh -c "$(curl -fsLS get.chezmoi.io)"
chezmoi init git@github.com:clintonsteiner/dotfiles.git
chezmoi apply
```

## Edit and add files

```bash
chezmoi add ~/.bash_aliases
chezmoi apply
chezmoi cd
git commit -m "commit"
git push
```
