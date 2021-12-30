FROM node:16 AS base

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base AS test-stage
RUN npm ci
COPY . .
RUN CI=true npm test

FROM base AS build-stage
RUN npm ci
COPY --from=test-stage /usr/src/app .
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api/
RUN npm run build
RUN npm install -g serve
CMD ["serve", "build"]