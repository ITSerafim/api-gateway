const fs = require('fs');

module.exports = function () {
  !fs.existsSync(process.env.LOG_PATH) &&
    fs.mkdirSync(process.env.LOG_PATH, { recursive: true });
};
