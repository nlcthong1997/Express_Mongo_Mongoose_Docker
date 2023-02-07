#!/bin/bash

mv -r /usr/local/cache/node_modules/. /app/node_modules/
mv /usr/local/cache/package-lock.json /app/

exec npm run dev