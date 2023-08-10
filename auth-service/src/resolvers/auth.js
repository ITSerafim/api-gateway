const User = require('../models/user');
const Repository = require('../core/repository');
const AuthService = require('../service/auth.service');

class AuthResolver {
  #service;

  constructor() {
    this.#service = new AuthService(User, Repository);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  async register(_, object) {
    return await this.#service.register(_, object);
  }

  async login(_, object) {
    return await this.#service.login(_, object);
  }
}

const authResolver = new AuthResolver();

module.exports = {
  register: authResolver.register,
  login: authResolver.login,
};
