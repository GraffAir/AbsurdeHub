# Build stage
FROM node:20-alpine AS build
WORKDIR /app
RUN apk add --no-cache git
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/.output /app/.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
