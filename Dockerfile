# Stage 0 = build-stage
FROM node:11.4.0 as build-stage

WORKDIR /app/

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build:prod

# Stage 1
FROM nginx

COPY --from=build-stage /app/dist/ /app/dist/

COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf