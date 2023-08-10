module.exports = {
  name: 'mongodb',
  port: process.env.MONGO_PORT,
  host: process.env.MONGO_HOST,
  cluster: process.env.CLUSTER,
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
};
