const pino = require('pino');

const transport = pino.transport({
  target: 'pino-pretty',
  options: {
    colorize: true,
    destination: `${process.env.LOG_PATH}/db.log`,
  },
});

module.exports = pino({ level: 'info' }, transport);
