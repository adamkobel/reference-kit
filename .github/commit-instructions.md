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

Choose the type based on the change itself:

- Use `docs` when adding or changing documentation, including a new reference
  page or cheatsheet. For example: `docs(docker): add Docker cheatsheet`.
- Use `feat` when adding a new capability to the software or product, not just
  when adding a new file or page to this reference collection.
- If a change includes both documentation and a software feature, choose the
  type that best describes the primary change; split unrelated changes into
  separate commits when practical.

Example:

```
docs(system-administration): add PowerShell profile guide

Add a guide for creating a PowerShell profile with a workspace
command, and index it in the sidebar and docs home page.
```
