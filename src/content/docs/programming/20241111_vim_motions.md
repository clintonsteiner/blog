---
title: Vim Motions Notes
---

[Based on
notes](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/moving-blazingly-fast-with-the-core-vim-motions/)

# Horizontal Nav Motions

- 0: first char
- \^: first non-blank char
- \$: end char
- `g_`: end non-blank char
- f{character}: moves us to that char
- Use ; to get next match and , to get the previous
- t{character}: moves just before next occurrence

# Add in Operator to motions

Structured {Operator}{count}{motion}

- df\' delete everything until occurrence of \'
- dtX deletes everything up to X
- dTX deletes everything backward up to X
- d/hello delete everything until hello
- Inputting . allows you to repeat the last change

# VI Mode Bash Prompt

set -o vi
