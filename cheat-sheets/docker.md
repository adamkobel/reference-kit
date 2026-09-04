# Docker Cheatsheet

Quick reference of common Docker commands, Dockerfile patterns, docker-compose usage, and troubleshooting tips.

## Images
- **List images:** `docker images` or `docker image ls`
- **Pull image:** `docker pull <image>:<tag>`
- **Build image (local):** `docker build -t <name>:<tag> .`
- **Build with Dockerfile path:** `docker build -f Dockerfile.prod -t myapp:prod ./context`
- **Remove image:** `docker rmi <image_id_or_name>`
- **Inspect image:** `docker image inspect <image>`

## Containers
- **List running containers:** `docker ps`
- **List all containers:** `docker ps -a`
- **Run interactive container (remove when exit):** `docker run --rm -it <image> /bin/bash`
- **Run detached:** `docker run -d --name <name> <image>`
- **Run with port mapping:** `docker run -p host_port:container_port <image>`
- **Run with environment vars:** `docker run -e KEY=VALUE -e "OTHER=1" <image>`
- **Run with mounted volume:** `docker run -v /host/path:/container/path <image>`
- **Start/Stop container:** `docker start <container>` / `docker stop <container>`
- **Restart container:** `docker restart <container>`
- **Remove container:** `docker rm <container>` (use `-f` to force)
- **View logs:** `docker logs <container>` (add `-f` to follow)
- **Execute command inside running container:** `docker exec -it <container> <cmd>`
- **Copy files to/from container:** `docker cp <src> <container>:<dest>` or `docker cp <container>:<src> <dest>`
- **Inspect container:** `docker inspect <container>`

## Volumes & Bind Mounts
- **Create volume:** `docker volume create <volname>`
- **List volumes:** `docker volume ls`
- **Inspect volume:** `docker volume inspect <volname>`
- **Remove volume:** `docker volume rm <volname>`
- **Bind mount example:** `-v $(pwd)/data:/app/data` (host path mirrored)

## Networks
- **List networks:** `docker network ls`
- **Create network:** `docker network create <netname>`
- **Connect container to network:** `docker network connect <netname> <container>`
- **Run and attach to network:** `docker run --network <netname> ...`

## Dockerfile Essentials
- **Base image:** `FROM node:18-alpine`
- **Set working dir:** `WORKDIR /app`
- **Copy files:** `COPY package*.json ./` then `COPY . .`
- **Install deps:** `RUN npm ci --only=production`
- **Environment vars:** `ENV NODE_ENV=production`
- **Expose port (documentation only):** `EXPOSE 8080`
- **Default command:** `CMD ["node","server.js"]`
- **Best practices:**
  - Use small base images (alpine, slim).
  - Leverage multi-stage builds for smaller production images.
  - Minimize number of layers: combine commands where sensible.
  - Pin versions for reproducible builds.

## Multi-stage build example
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --production
CMD ["node","dist/index.js"]
```

## docker-compose (v3) quick usage
- **Start services:** `docker-compose up` (add `-d` to detach)
- **Stop services:** `docker-compose down`
- **Rebuild & restart:** `docker-compose up --build -d`
- **View service logs:** `docker-compose logs -f <service>`
- **Run one-off command:** `docker-compose run --rm <service> <cmd>`

### Example docker-compose.yml
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:8080"
    environment:
      - NODE_ENV=production
    volumes:
      - ./logs:/app/logs
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: secret
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

## Troubleshooting & Tips
- **Remove all stopped containers:** `docker container prune`
- **Remove unused images:** `docker image prune` or `docker image prune -a` (careful)
- **Remove unused volumes:** `docker volume prune`
- **Reclaim all unused objects:** `docker system prune` (add `-a` to remove unused images)
- **Check disk usage:** `docker system df`
- **Enable BuildKit (faster builds):** `DOCKER_BUILDKIT=1 docker build .`
- **Inspect running processes in container:** `docker top <container>`
- **Get container shell when init system present:** `docker exec -it <container> /bin/bash` or `/bin/sh`

## Common Flags Cheat
- `-d` : detached
- `-it`: interactive TTY
- `--rm`: remove after exit
- `-p host:container` : port mapping
- `-v host:container` : volume/bind mount
- `--name` : container name
- `--network` : network to attach

## Security & Best Practices
- Avoid running containers as root; use `USER` in Dockerfile.
- Scan images: `docker scan <image>`
- Use smaller base images and minimal runtimes.

## Further reading
- Docker docs: https://docs.docker.com/
- Compose docs: https://docs.docker.com/compose/
