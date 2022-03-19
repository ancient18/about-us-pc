FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm i --frozen-lockfile && npm install --frozen-lockfile

FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm install -g pnpm && pnpm build && pnpm install --production --ignore-scripts --prefer-offline

FROM node:alpine AS runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package-lock.json ./package-lock.json

ENV NODE_ENV production
ENV PORT 8080

EXPOSE 8080

CMD ["node_modules/.bin/next", "start"]
