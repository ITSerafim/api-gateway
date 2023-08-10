
FROM node:18.7.0-alpine


RUN npm install -g nodemon

RUN npm install -g sequelize-cli

WORKDIR /auth-service

COPY /*.json ./

COPY .sequelizerc ./.sequelizerc

COPY . ./

RUN npm i

ENV NODE_ENV=production

EXPOSE 5002

CMD [ "npm", "run", "start" ]
