FROM node:18-alpine
WORKDIR /home/node/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]



# FROM node:18-alpine as builder
# WORKDIR /home/node/app

# RUN npm ci
# RUN npm run build
# CMD ["npm", "start"]