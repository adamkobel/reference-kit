Write commit messages in Conventional Commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

- type: one of `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`
- scope: optional; the area affected, such as `docs`, `config`, or a subject directory
- subject: imperative mood ("Add", not "Added"), max 50 characters, only the first word capitalized, no trailing period
- body: optional; explain what and why, wrapped at 72 characters, separated from the subject by a blank line
- footer: optional; issue references (`Closes #42`) and breaking changes

Example:

```
docs(system-administration): add PowerShell profile guide

Add a guide for creating a PowerShell profile with a workspace
command, and index it in the sidebar and docs home page.
```
