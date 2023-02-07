FROM node:16.19.0

LABEL author="Thong Nguyen"

WORKDIR /usr/local/cache

COPY ./app/package*.json .

RUN npm install --loglevel verbose

WORKDIR /usr/local/bash

COPY entrypoint.sh .

WORKDIR /app

COPY ./app .

EXPOSE 3000