FROM node:16

LABEL author="Thong Nguyen"

WORKDIR /app

COPY ./app/package.json .

RUN npm install

COPY ./app/ .

EXPOSE 3000

CMD npm run dev