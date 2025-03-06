---
publishDate: 2025-3-6
title: Pre-Commit Install
---

## Create .pre-commit-config.yaml at base of repo

```yaml
repos:
  - repo: https://github.com/psf/black
    rev: 24.10.0
    hooks:
      - id: black
        args: [--line-length=120]

  - repo: https://github.com/PyCQA/flake8
    rev: 7.1.1
    hooks:
      - id: flake8
        args: [--max-line-length=120]
        additional_dependencies:
          - flake8-bugbear

  - repo: https://github.com/adrienverge/yamllint
    rev: v1.35.1
    hooks:
      - id: yamllint
        args: [--strict]

  - repo: https://github.com/rstcheck/rstcheck
    rev: v6.2.4
    hooks:
      - id: rstcheck
        name: Check reStructuredText files
        entry: rstcheck
        language: python
        types: [rst]
        require_serial: true

  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v5.0.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-json
      - id: check-added-large-files
      - id: fix-encoding-pragma
      - id: debug-statements
      - id: check-merge-conflict
      - id: mixed-line-ending
      - id: forbid-new-submodules
      - id: check-executables-have-shebangs
      - id: check-yaml
```

## Install hooks

```bash
pre-commit install
```

## Apply to all files

```bash
pre-commit run --all-files
```

## Github action to ensure pre-commit was applied

```yaml
name: Lint RST Files

on: # yamllint disable-line rule:truthy
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
  workflow_dispatch:

jobs:
  lint-rst:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v4
        with:
          python-version: "3.13"
          enable-cache: true

      - name: Install linters
        run: |
          uv run pre-commit install

      - name: Lint RST files
        run: |
          uv run pre-commit run --all-files
```
