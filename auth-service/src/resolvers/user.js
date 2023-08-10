const User = require('../models/user');
const Repository = require('../core/repository');
const Service = require('../core/service');

class UserResolver {
  #service;

  constructor(Service) {
    this.#service = new Service(User, Repository);
    this.users = this.users.bind(this);
    this.user = this.user.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async users(_, object) {
    return await this.#service.query(_, object);
  }

  async user(_, object) {
    return await this.#service.query(_, object);
  }

  async createUser(_, object) {
    return await this.#service.mutation(_, object);
  }
}

const userResolver = new UserResolver(Service);

module.exports = {
  users: userResolver.users,
  user: userResolver.user,
  createUser: userResolver.createUser,
};
