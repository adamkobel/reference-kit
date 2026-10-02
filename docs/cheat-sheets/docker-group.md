`# Docker: Add User to Docker Group

Fix `permission denied` on `/var/run/docker.sock` so Docker commands do not require `sudo`.

## Quick Fix

```bash
# Add your user to the docker group
sudo usermod -aG docker $USER

# Apply immediately in the current shell (no logout needed)
newgrp docker
```

A full logout and login also works instead of `newgrp`.

## Verify

```bash
# Should list containers without error
docker ps

# Confirm group membership; docker should appear
groups $USER
```

## Why It Works

| Item | Description |
| --- | --- |
| `/var/run/docker.sock` | Unix socket the Docker daemon listens on, owned by the `docker` group. |
| `usermod -aG` | Appends (`-a`) the user to a supplementary group (`-G`) without removing existing groups. |
| `newgrp docker` | Starts a new shell with the updated group active, avoiding a logout. |

## Security Note

The `docker` group grants effective root-level access: containers can mount the host filesystem. It is appropriate for a personal development machine or home lab, but use care on shared servers.