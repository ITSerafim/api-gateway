require('dotenv').config();
require('./src/helpers/createLogDirectory')();

const schema = require('./src/helpers/readGraphqlSchema')(`${__dirname}/.`);
const resolvers = require('./src/resolvers');
const authHelpers = require('./src/service/auth-helpers.service');

const mercurius = require('mercurius');
const mercuriusAuth = require('mercurius-auth');

const fastifyCors = require('@fastify/cors');

const dbConnect = require('./src/helpers/connectToDB');
const db = require('./src/configs/db.config');
require('./src/relationships/user-role');

const serviceConfig = require('./src/configs/service.config');

const service = require('fastify')({
  logger: true,
});

service.register(fastifyCors);

service.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

service.register(mercuriusAuth, {
  authContext(ctx) {
    return {
      identity: ctx.reply.request.headers['x-user'],
    };
  },
  async applyPolicy(authDirectiveAST, parent, args, ctx, info) {
    const token = ctx.auth.identity;
    try {
      const verify = authHelpers.verifyToken(token);
    } catch (error) {
      throw new Error('Token not verify! Try again.');
    }
    return true;
  },
  authDirective: 'auth',
});

const start = async () => {
  try {
    await service.listen({
      host: serviceConfig.host,
      port: serviceConfig.port,
    });
    await dbConnect(db);
    console.log(`Auth service start on port: ${serviceConfig.port}`);
  } catch (error) {
    service.log.error(error);
    process.exit(1);
  }
};

start();
