FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Crea la base de datos y la pobla al momento de buildear
RUN node db/seed.js

EXPOSE 4000

CMD ["node", "server.js"]