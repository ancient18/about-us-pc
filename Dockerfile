FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm i --frozen-lockfile --prefer-offline
COPY . .
RUN pnpm build

FROM node:alpine AS runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package-lock.json ./package-lock.json

ENV PORT 8080

EXPOSE 8080

CMD ["node_modules/.bin/next", "start"]