FROM node:18.14.2

WORKDIR /home/node/app
COPY ./package.json /home/node/app/package.json
COPY ./.npmrc /home/node/app/.nvmrc

RUN npm install

COPY . .