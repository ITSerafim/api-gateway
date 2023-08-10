
FROM node:18.7.0-alpine

RUN npm install -g nodemon

WORKDIR /organization-service

COPY /*.json ./

RUN npm i

EXPOSE 5003

CMD [ "npm", "run", "start" ]
