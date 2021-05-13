FROM node:12-alpine
USER node:node
WORKDIR /home/node
COPY package.json yarn.lock /home/node/
RUN yarn install
COPY . /home/node
CMD [ "yarn", "start" ]
EXPOSE 3000