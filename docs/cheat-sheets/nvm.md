# NVM Essentials

Quick reference for installing Node Version Manager (NVM) and managing Node.js
versions. macOS uses the POSIX-shell `nvm` project; Windows uses the separate
NVM for Windows project.

## Install NVM

### macOS

Install the current NVM release in Terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.7/install.sh | bash
```

Close and reopen Terminal, then verify it is available:

```bash
command -v nvm
nvm --version
```

`command -v nvm` should print `nvm`. If it does not, create `~/.zshrc`, rerun
the installer, and open a new terminal:

```bash
touch ~/.zshrc
```

### Windows

Install **NVM for Windows** with `winget` in PowerShell:

```powershell
winget install CoreyButler.NVMforWindows
```

Or download and run the current installer from the [NVM for Windows releases](https://github.com/nvm-windows/nvm/releases).
Close and reopen PowerShell, then verify the installation:

```powershell
nvm version
```

Do not install the macOS/Linux `nvm` script in standard Windows PowerShell or
Command Prompt. Use it in WSL instead if that is your development environment.

## Install and Use Node.js

Use the commands for your operating system below. Replace `22` with the major
version your project needs, or specify a full version such as `22.14.0`.

### macOS

```bash
nvm install 22       # Download, install, and use the latest 22.x release
nvm install --lts    # Download, install, and use the current LTS release
nvm use 22           # Switch the current terminal to an installed 22.x release
node --version
npm --version
```

### Windows

```powershell
nvm install 22       # Download and install the latest 22.x release
nvm use 22           # Switch the active Node.js version
node --version
npm --version
```

Run Windows PowerShell as Administrator when required by your NVM for Windows
installation, especially if switching versions fails because the Node symlink
cannot be updated.

## List Versions

```bash
# macOS
nvm ls                # Installed versions; the arrow marks the active version
nvm ls-remote         # Versions available to install
nvm ls-remote --lts   # Available LTS versions
```

```powershell
# Windows
nvm list              # Installed versions; the active version is marked
nvm list available    # Versions available to install
```

## Set a Default Version

### macOS

Set the version used in new terminals:

```bash
nvm alias default 22
nvm alias default lts/*
```

### Windows

Select the version to activate now. NVM for Windows continues using that active
version until you switch it again:

```powershell
nvm use 22
```

## Pin a Project Version

In a project directory on macOS, create `.nvmrc` and switch to it:

```bash
echo 22 > .nvmrc
nvm install           # Installs the version in .nvmrc when missing
nvm use
```

Commit `.nvmrc` so collaborators use the intended Node.js version. NVM for
Windows supports directory version management in version 2; see its
[documentation](https://docs.nvm-windows.com/) for the current setup.

## Useful Commands

```bash
# macOS
nvm current                 # Active Node.js version
nvm uninstall 20            # Remove an installed version
nvm install node            # Install the latest current Node.js release
nvm install --reinstall-packages-from=current 22  # Copy global packages
nvm use system              # Temporarily use the system-installed Node.js
```

```powershell
# Windows
nvm current                 # Active Node.js version
nvm uninstall 20            # Remove an installed version
nvm install latest          # Install the latest Node.js release
nvm arch                    # Show the Node.js architecture in use
```

## Further Reading

- [nvm for macOS, Linux, and WSL](https://github.com/nvm-sh/nvm)
- [NVM for Windows](https://github.com/nvm-windows/nvm)