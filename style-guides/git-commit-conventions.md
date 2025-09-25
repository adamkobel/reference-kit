# Git Commit Conventions

Consistent and descriptive commit messages help teams understand project history and facilitate collaboration. Follow these conventions for writing commit messages:

## Commit Message Structure

```
<type>(<scope>): <subject>

<body>

<footer>
```

- **type**: The kind of change (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`)
- **scope**: (Optional) The area of the codebase affected (e.g., `api`, `ui`, `build`)
- **subject**: A short, imperative summary of the change (max 50 characters)
- **body**: (Optional) Detailed explanation, wrapped at 72 characters
- **footer**: (Optional) References to issues, breaking changes, etc.

## Example

```
feat(auth): add JWT authentication

Implemented JWT-based authentication for login and registration.
This improves security and simplifies session management.

Closes #42
```

## Common Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semi-colons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Best Practices

- Use the imperative mood in the subject line (e.g., "Add", not "Added" or "Adds")
- Capitalize only the first word of the subject
- Do not end the subject with a period
- Reference issues and breaking changes in the footer

For more details, see [Conventional Commits](https://www.conventionalcommits.org/).