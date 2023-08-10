class AbstractService {
  #repository;

  constructor(Model, Repository) {
    this.#repository = new Repository(Model);
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.action = this.action.bind(this);
  }

  /**
   *
   * @param {string} id
   * @param {attribute = '_id', sortValue = 'createdAt'} options
   * @returns
   */
  async getOne(id, options) {
    const result = await this.#repository.one({
      ...options,
      findValue: id,
    });
    return result;
  }

  /**
   *
   * @param {string} id
   * @param {attribute = '_id', sortValue = 'createdAt'} options
   * @returns
   */
  async getAll(id, options) {
    const result = await this.#repository.all({
      ...options,
      findValue: id,
    });
    return result;
  }

  /**
   *
   * @param {data: object, id?: string} data
   * @param {create?: object, update?:object} options
   * @returns
   */
  async action(data, options) {
    const result = await this.#repository.save(data, options);
    return result;
  }
}

module.exports = AbstractService;
