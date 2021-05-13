#!/usr/bin/env sh
docker run \
    --rm -it \
    -v $PWD/src:/home/node/src \
    -v $PWD/public:/home/node/public \
    -v $PWD/package.json:/home/node/package.json \
    -v $PWD/yarn.lock:/home/node/yarn.lock \
    -p 3000:3000 \
    d3ce1t/node-app-resume $1