FROM node:20

# Install Bun.js
RUN npm install -g bun

COPY . .
RUN bun install
RUN bun style
RUN bun prisma-generate
CMD [ "bun", "start" ]
