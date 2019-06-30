FROM node:11.4.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build:prod

EXPOSE 4000

ENV NODE_ENV production

ENV PORT 4000

CMD ["node", "server.js"]