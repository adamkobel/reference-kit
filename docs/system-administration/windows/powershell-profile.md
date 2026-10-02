# Creating a PowerShell Profile

A step-by-step guide to creating a PowerShell profile and using it to define a `workspace` command that changes into your workspace directory.

---

## Prerequisites

- PowerShell 5.1 or PowerShell 7+
- A directory you want to jump to (this guide uses `C:\Users\<you>\Workspace`)

---

## 1. Check the Profile Path

`$PROFILE` holds the path of the profile that loads for the current user and host.

```powershell
$PROFILE
Test-Path $PROFILE
```

`Test-Path` returns `False` until the profile file exists.

> [!NOTE]
> Windows PowerShell 5.1 and PowerShell 7+ use different profile files:
> `Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` and
> `Documents\PowerShell\Microsoft.PowerShell_profile.ps1`.
> Create the profile in each version you use.

---

## 2. Create the Profile

```powershell
if (-not (Test-Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
```

`-Force` also creates any missing parent directories.

---

## 3. Add the `workspace` Command

An alias cannot hold a path or arguments, so define a function instead. Its name works like an alias when typed.

Open the profile:

```powershell
notepad $PROFILE
```

Add:

```powershell
function workspace {
    Set-Location "$HOME\Workspace"
}
```

Optionally add a short alias for the function:

```powershell
Set-Alias -Name ws -Value workspace
```

---

## 4. Reload and Verify

```powershell
. $PROFILE
workspace
Get-Location
```

`Get-Location` should show your workspace directory. New sessions load the profile automatically.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| `running scripts is disabled on this system` on startup | Execution policy blocks the profile | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| `workspace` is not recognized | Profile not loaded or created for a different PowerShell version | Check `$PROFILE` in the current shell, then run `. $PROFILE` |
| `Cannot find path` when running `workspace` | The directory does not exist | Fix the path in the function or create the directory |
