---
title: Bash Special Variables
---

---

Variable Description

---

`$?` The exit status of the last executed command. `0`
indicates success, and any non-zero value indicates an
error.

`$$` The process ID (PID) of the current shell.

`$!` The process ID (PID) of the last background command
executed.

`$#` The number of positional parameters (arguments) passed
to the script or function.

`$@` Expands to all positional parameters passed to the
script or function as separate entities.

`$*` Expands to all positional parameters as a single string,
separated by the first character of the `IFS`.

`$0` The name of the shell script or function.

`$1, $2, ...` Positional parameters representing the arguments passed
to the script or function, where `$1` is the first
argument, `$2` is the second, and so on.

---

: Bash Special Variables

# Example Usage

Here is an example demonstrating the usage of these variables:

```bash
echo "Script Name: $0"
echo "Number of Arguments: $#"
echo "All Arguments (individually): $@"
echo "All Arguments (as a single string): $*"
echo "First Argument: $1"
echo "Exit Status of Last Command: $?"
echo "Process ID of Current Shell: $$"

# Simulate a background process
sleep 5 &
echo "Process ID of Last Background Command: $!"
```

# Execute Parsed bash command

To execute a bash command after some shell parsing

Say we have want to manually run a command from our crontab

```bash
crontab -l | tail -n 1
```

To execute that in bash we would do as follows

```bash
bash -c "$(crontab -l | tail -n 1)"
```

# Awk Guide for Substrings

> substr(string, start, length)

- **string**: The input string.
- **start**: The starting position (1-based index).
- **length**: (Optional) The number of characters to extract. If
  omitted, extracts to the end of the string.

## Examples

Command Output Explanation

---

| Command                                                                     | Output    | Explanation                                            |
| --------------------------------------------------------------------------- | --------- | ------------------------------------------------------ |
| `bash echo Hello, World! \| awk '{print substr($0, 1, 5)}'`                 | `Hello`   | First 5 characters                                     |
| `bash echo Hello, World! \| awk '{print substr($2, 2, 2)}'`                 | `or`      | Use space as delimiter, next 2 chars from second field |
| `bash echo Hello, World! \| awk '{print substr($0, 8)}'`                    | `World!`  | Char 8 to the end of the line                          |
| `bash echo "apple,banana,cherry" \| awk -F, '{print substr($2, 1, 3)}'`     | `ban`     | Use comma as delimiter, 3 chars from second field      |
| `bash echo "abcdef" \| awk '{print substr($0, 1, 3) "-" substr($0, 4, 3)}'` | `abc-def` | Combine substrings formed by awk                       |

: Common [awk]{.title-ref} Substring Examples

## Notes

- The default field separator is a space. Use the `-F` option to
  specify a custom delimiter.
- Conditions can be added to extract substrings only when specific
  criteria are met, e.g., `if ($2 > 100)`{.bash}.
