const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthHelpers {
  constructor() {}

  static passwordHash(password) {
    return bcrypt.hash(password, 5);
  }

  static passwordVerify(password, hash) {
    return bcrypt.compareSync(password, hash);
  }

  static signToken(data) {
    return jwt.sign(data, process.env.SECRET_KEY);
  }

  static verifyToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
  }
}

module.exports = AuthHelpers;
