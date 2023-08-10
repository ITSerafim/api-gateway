const mongoose = require('mongoose');
const config = require('../configs/db.config');
const logger = require('../configs/logger');

module.exports = async function () {
  try {
    await mongoose.connect(
      `${config.name}://${config.host}:${config.port}/${config.cluster}`
    );
    logger.info('Connection to Mongo success');
  } catch (error) {
    logger.error(error);
  }
};
