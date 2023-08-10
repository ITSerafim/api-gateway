# dev
FROM node:18.7.0-alpine

RUN npm install -g nodemon

WORKDIR /proxy-service

COPY /*.json ./

RUN npm i

COPY . .

EXPOSE 5001

CMD [ "npm", "run", "start" ]

