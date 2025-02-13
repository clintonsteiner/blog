---
title: Git Aliases
---

```bash
alias ..='cd ../'
alias ...='cd ../../'
alias ....='cd ../../../'

alias gd='git diff'
alias gds='git diff --staged'
alias gs='git status'
alias ga='git add'
alias gr='git restore'
alias grs='git restore --staged'
alias gc='git commit'
alias gcm='git commit -m'
alias gca='git commit --amend --no-edit --date=now'
alias gb='git branch'
alias gbdates="git for-each-ref --sort=committerdate refs/heads/ --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents-subject) - %(authorname) (%(color:green)%(committerdate:short)%color:reset))'"
alias gbresethard='git reset --hard @{u}'
```
