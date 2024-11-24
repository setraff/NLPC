FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client
RUN npm install
RUN npm run dev

WORKDIR /usr/src/app/server
RUN npm install
RUN npm run dev

WORKDIR /usr/src/app/server

EXPOSE 3000

CMD ["node", "index.js"]
