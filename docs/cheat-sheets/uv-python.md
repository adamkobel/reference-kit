# uv and Python

A short reference for installing `uv` and using it to manage Python versions,
virtual environments, dependencies, and tools.

## Install uv

### Windows PowerShell

``` powershell
irm https://astral.sh/uv/install.ps1 | iex
```

### macOS / Linux

``` bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Restart the terminal if `uv` is not immediately available on `PATH`.

Check the installation and upgrade `uv`:

``` bash
uv --version
uv self update
```

## Python versions

Install and list Python versions managed by `uv`:

``` bash
uv python install 3.12
uv python list
```

Show the Python version selected in the current directory:

``` bash
uv python find
python --version
```

Create a `.python-version` file to pin the project version:

``` bash
uv python pin 3.12
```

## Projects

Create a new project:

``` bash
uv init my-project
cd my-project
```

Initialize an existing directory:

``` bash
uv init
```

Add and remove dependencies. These commands update `pyproject.toml` and the
lock file:

``` bash
uv add requests
uv add "pydantic>=2"
uv add --dev pytest ruff
uv remove requests
```

Install the locked environment, or update dependencies and the lock file:

``` bash
uv sync
uv lock
uv lock --upgrade
```

Run commands inside the project environment without activating it:

``` bash
uv run python main.py
uv run pytest
uv run ruff check .
```

Build and publish a package:

``` bash
uv build
uv publish
```

## Virtual environments

Create a virtual environment with a specific Python version and activate it:

``` bash
uv venv --python 3.12
```

``` powershell
# Windows PowerShell
.venv\Scripts\Activate.ps1
```

``` bash
# macOS / Linux
source .venv/bin/activate
```

Install packages into the active environment:

``` bash
uv pip install requests
uv pip install -r requirements.txt
uv pip freeze > requirements.txt
```

Deactivate the environment:

``` bash
deactivate
```

## Scripts and tools

Run a one-off script with its dependencies. `uv` creates an isolated
environment automatically:

``` bash
uv add --script script.py requests
uv run script.py
```

Install command-line tools into an isolated environment:

``` bash
uv tool install ruff
uv tool run cowsay "Hello"
uv tool list
uv tool upgrade --all
uv tool uninstall ruff
```

## Useful commands

``` bash
uv tree                 # Show the project dependency tree
uv sync --reinstall     # Recreate the project environment
uv cache dir            # Show the cache location
uv cache clean          # Clear cached packages and distributions
uv help                 # Show command help
```

## Typical workflow

``` bash
uv init
uv python pin 3.12
uv add requests
uv add --dev pytest ruff
uv run pytest
uv run ruff check .
```