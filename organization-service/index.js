require('dotenv').config();
require('./src/helpers/createLogDirectory')();
require('./src/helpers/connectToDB')();
require('./src/models/organization');

const mercurius = require('mercurius');

const schema = require('./src/helpers/readGraphqlSchema')(`${__dirname}/.`);
const resolvers = require('./src/resolvers');

const serviceConfig = require('./src/configs/service.config');

const fastifyCors = require('@fastify/cors');

const service = require('fastify')({
  logger: true,
});

service.register(fastifyCors);

service.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

const start = async () => {
  try {
    await service.listen({
      host: serviceConfig.host,
      port: serviceConfig.port,
    });
    console.log(`Organization service start on port: ${serviceConfig.port}`);
  } catch (error) {
    service.log.error(err);
    process.exit(1);
  }
};

start();
