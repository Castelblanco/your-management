FROM node:20

WORKDIR /code
# Install Bun.js
RUN npm install -g bun

COPY . .
RUN bun install
RUN bun style
RUN bun prisma-generate

ENTRYPOINT [ "bun", "start" ]
