const fs = require('fs');

module.exports = function (path) {
  return fs.readFileSync(`${path}/schema.graphql`, { encoding: 'utf8' });
};
