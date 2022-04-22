FROM node:16-alpine3.14 AS base

WORKDIR /usr/apps/frontend

COPY package* ./

RUN npm install

COPY . .

FROM base AS dev
CMD ["npm", "start"]

FROM base AS test
CMD ["npm", "test"]

FROM base AS build
RUN npm run build
RUN ls
# RUN npm prune --production

FROM nginx:1.21.6-alpine AS prod
COPY --from=build /usr/apps/frontend/build /usr/share/nginx/html