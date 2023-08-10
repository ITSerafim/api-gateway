module.exports = {
  port: process.env.PROXY_SERVICE_PORT,
  host: process.env.APP_HOST,
  logs: process.env.LOG_PATH,
  pAddress: process.env.PROXY_ADDRESS,
  pPort: process.env.PROXY_PORT,
  pPrefix: process.env.PROXY_PREFIX,
};
