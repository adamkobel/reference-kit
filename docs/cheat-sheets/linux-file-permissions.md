# Linux File Permissions

Quick reference for inspecting and changing ownership and permissions on Linux files and directories.

## Permission Model

Each filesystem object has an owner, a group, and permissions for three classes:

| Class | Applies to |
| --- | --- |
| `u` | User/owner |
| `g` | Group |
| `o` | Others |
| `a` | All three classes |

Each class can have read (`r`), write (`w`), and execute (`x`) permissions:

| Permission | File | Directory | Numeric value |
| --- | --- | ---: | ---: |
| `r` | Read contents | List entries | `4` |
| `w` | Modify contents | Create, rename, or delete entries | `2` |
| `x` | Execute the file | Enter/traverse the directory | `1` |

## Inspect Permissions

```bash
# Long listing: mode, owner, group, size, and timestamps
ls -l path/to/file

# Include hidden files
ls -la path/to/directory

# Show permissions and ownership for every path component
namei -l /path/to/file

# Show the numeric mode, owner, and group
stat -c '%A %a %U %G %n' path/to/file
```

A mode such as `-rwxr-x---` means:

- The first character identifies the file type: `-` is a regular file and `d` is a directory.
- `rwx` gives the owner read, write, and execute access.
- `r-x` gives the group read and execute access.
- `---` gives others no access.

## Change Permissions with `chmod`

### Symbolic Mode

```bash
chmod u+x script.sh       # Add execute for the owner
chmod g-w report.txt      # Remove write for the group
chmod o-r secret.txt      # Remove read for others
chmod a+r public.txt      # Add read for everyone
chmod u=rw,go=r file.txt  # Set exact permissions by class
```

Use `-R` for a recursive change only when every item in the tree should receive the same change:

```bash
chmod -R u+rwX,go+rX shared-directory/
```

`X` adds execute only to directories and to files that already have execute permission.

### Numeric Mode

Add the values for each class in owner, group, and others order:

```bash
chmod 644 file.txt       # rw-r--r--
chmod 600 private.key    # rw-------
chmod 755 script.sh      # rwxr-xr-x
chmod 750 application/   # rwxr-x---
chmod 700 private-dir/   # rwx------
```

Avoid making sensitive files world-readable or world-writable. Prefer the narrowest mode that supports the required workflow.

## Change Ownership

```bash
# Change the owner
sudo chown alice file.txt

# Change the owner and group
sudo chown alice:developers file.txt

# Change only the group
sudo chgrp developers file.txt

# Apply ownership to a directory tree
sudo chown -R alice:developers project/
```

Use recursive ownership changes carefully. A misplaced `-R` can change system files or files that should retain different owners.

## Default Permissions with `umask`

`umask` removes permissions from newly created files and directories. It does not add permissions.

```bash
# Show the current mask in symbolic and numeric form
umask
umask -S

# Common private default for a shell session
umask 077
```

The usual maximum base modes are `666` for files and `777` for directories. With `umask 027`, newly created files normally start at `640` and directories at `750`; applications may apply additional restrictions.

## Special Permissions

| Bit | Numeric value | Effect |
| --- | ---: | --- |
| Setuid | `4000` | Executable runs with the file owner's effective ID. |
| Setgid | `2000` | Executable runs with the file group's effective ID; on directories, new entries inherit the directory group. |
| Sticky | `1000` | In a directory, users can remove or rename only entries they own, unless they are privileged. |

```bash
chmod 4755 program       # Setuid plus 755
chmod 2770 shared/        # Setgid directory for group collaboration
chmod 1777 /shared-tmp/   # Sticky directory with full access
```

Review setuid and setgid files carefully because they can increase the impact of a vulnerability:

```bash
find / -type f -perm /6000 -ls 2>/dev/null
```

## Find Permission Problems

```bash
# World-writable files
find /path -type f -perm -0002 -ls

# World-writable directories without the sticky bit
find /path -type d -perm -0002 ! -perm -1000 -ls

# Files owned by a particular user
find /path -user alice -ls

# Files not owned by an expected user or group
find /path \! -user alice -o \! -group developers
```

## Verify Access as a User

```bash
# Check whether the current user can read, write, or execute a path
[ -r file.txt ] && echo readable
[ -w file.txt ] && echo writable
[ -x directory ] && echo traversable

# Test a command as another user
sudo -u alice test -r /path/to/file && echo readable
```

Permissions can also be affected by ACLs, filesystem mount options, and security frameworks such as SELinux or AppArmor. When the mode and ownership look correct but access still fails, inspect those controls next.
