# Anaconda

A short reference of common conda commands.

## Commands

### Environments

Create and activate an environment

``` bash
conda create --name my-env
conda activate my-env
```

---

Create an environment with a specific Python version and packages

``` bash
conda create -n my-env python=3.11 numpy pandas
conda activate my-env
```

---

Deactivate an environment

``` bash
conda deactivate
```

---

Remove an environment

``` bash
conda remove --name my-env --all
```

---

List environments

``` bash
conda info --envs
```

---

List packages in the active environment

``` bash
conda list
```

---

Export environment to YAML / create from YAML

``` bash
conda env export -n my-env > environment.yml
conda env create -f environment.yml
```
