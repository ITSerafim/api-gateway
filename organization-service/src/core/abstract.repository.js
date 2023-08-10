class AbstractRepository {
  #model;

  constructor(Model) {
    this.#model = Model;
  }

  /**
   *
   * @param {attribute = '_id', sortValue = 'createdAt', findValue: any} options
   * @returns
   */
  async all(options) {
    return await this.#model.find({}).where(options?.sortValue);
  }

  /**
   *
   * @param {findValue, attribute = '_id', sortValue = 'createdAt', findValue: any} options
   * @returns
   */
  async one(options) {
    return await this.#model
      .findOne({ [options.attribute]: options.findValue })
      .populate('type')
      .where(options.sortValue);
  }

  /**
   *
   * @param {data: object, id?: string} data
   * @param {create?: object, update?:object} options
   * @returns
   */
  async save(data, options) {
    if (data.id) {
      return await this.#update(data, options?.update);
    }
    await this.#create(data, options?.create);
  }

  /**
   *
   * @param {object | Array<object>} data
   * @param {*} options
   */
  async #create(data, options) {
    const _model = new this.#model(data);
    if (data.length > 0) {
      await this.#model.insertMany(data);
    }
    await _model.save();
  }

  /**
   *
   * @param {data: object, id: string}
   * @param {attribute = '_id', isReturn = false} options
   * @returns
   */
  async #update({ data, id }, options) {
    if (options.isReturn) {
      return await this.#model.findOneAndUpdate({ [attribute]: id }, data);
    }
    await this.#model.updateOne({ [options.attribute]: id }, data);
  }
}

module.exports = AbstractRepository;
