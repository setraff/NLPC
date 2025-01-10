FROM node:lts-alpine

RUN apk add --no-cache openssl

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build

WORKDIR /usr/src/app/server
RUN npm install
RUN npx prisma generate

CMD ["npm", "start"]
