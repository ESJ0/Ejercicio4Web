FROM node:20-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 4000

CMD ["sh", "-c", "node db/seed.js && node server.js"]