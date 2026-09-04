# GitHub Repository Initialization Guide

Follow these steps to initialize a new Git repository, make your first commit, and push to GitHub.

## 1. Initialize Git

```sh
git init
```

## 2. Add Files

```sh
git add .
```

## 3. Commit Changes

```sh
git commit -m "chore: initial commit"
```

## 4. Create a New Repository on GitHub

- Go to [GitHub](https://github.com/) and create a new repository.
- Do **not** initialize with a README, .gitignore, or license.

## 5. Add Remote Origin

```sh
git remote add origin git@github.com:USERNAME/REPOSITORY.git
```

Replace `USERNAME` and `REPOSITORY` with your GitHub username and repository name.

## 6. Push to GitHub

```sh

git push -u origin main
```