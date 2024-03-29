FROM node:lts-alpine

LABEL MAINTAINER "Ricardo Fedrigo <ricardofedrigo1995@gmail.com>"

RUN apk add --no-cache yarn

RUN rm -rf /var/cache/apk/* && rm -rf /tmp/*

RUN yarn global add pm2

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . .

RUN yarn install

EXPOSE 3000

CMD pm2-runtime ecosystem.config.js