FROM node:18-alpine as builder
WORKDIR /home/node/app
COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/
RUN npm install
RUN npm ci
RUN npm run build
CMD ["npm", "start"]