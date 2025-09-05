FROM node:20-alpine

WORKDIR /app

COPY ./packages ./packages

COPY ./package.json ./package.json

COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

COPY ./pnpm-workspace.yaml ./pnpm-workspace.yaml

COPY ./turbo.json ./turbo.json

COPY ./apps/ws-backend ./apps/ws-backend

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run db:generate

RUN pnpm run build

EXPOSE 4001

CMD ["pnpm", "run", "start:ws-backend"]
