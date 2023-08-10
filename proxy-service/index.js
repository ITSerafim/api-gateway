require('dotenv').config();
require('./helpers/createLogDirectory')();
const proxy = require('@fastify/http-proxy');
const fastifyCors = require('@fastify/cors');
const serviceConfig = require('./configs/service.config');

const service = require('fastify')({
  logger: true,
});

service.register(fastifyCors);

service.register(proxy, {
  upstream: `${serviceConfig.pAddress}:${serviceConfig.pPort}`,
  prefix: serviceConfig.pPrefix,
  http2: false,
});

const start = async () => {
  try {
    await service.listen({
      host: serviceConfig.host,
      port: serviceConfig.port,
    });
    console.log(`Proxy service start on port: ${serviceConfig.port}`);
  } catch (error) {
    service.log.error(err);
    process.exit(1);
  }
};

start();
