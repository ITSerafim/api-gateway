const helpers = require('./auth-helpers.service');
const Service = require('../core/service');

class AuthService extends Service {
  #repository;

  constructor(Model, Repository) {
    super(Model, Repository);
    this.#repository = new Repository(Model);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register(_, object) {
    const { password, ...rest } = object.input;

    const hashedPassword = await helpers.passwordHash(password);

    const result = await this.#repository.save({
      ...rest,
      password: hashedPassword,
    });

    const token = await helpers.signToken({ userId: result.id });

    return {
      user: { ...result.dataValues },
      token,
    };
  }

  async login(_, object) {
    const { password, email } = object.input;

    const result = await this.#repository.one(email, 'email');

    const isValidPassword = await helpers.passwordVerify(
      password,
      result.password
    );

    if (!isValidPassword) {
      throw new Error('Invalid password');
    }

    const token = await helpers.signToken({ userId: result.id });

    return {
      user: { ...result.dataValues },
      token,
    };
  }
}

module.exports = AuthService;
