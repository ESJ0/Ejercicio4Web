FROM node:20-alpine

# better-sqlite3 necesita herramientas de compilación nativas
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN node db/seed.js

EXPOSE 4000

CMD ["node", "server.js"]
