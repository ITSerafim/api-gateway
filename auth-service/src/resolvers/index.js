const { users, user, createUser } = require('./user');
const { register, login } = require('./auth');

module.exports = {
  Query: {
    users,
    user,
    login,
    register,
  },
  Mutation: {
    createUser,
  },
};
