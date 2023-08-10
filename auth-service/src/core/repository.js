class Repository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  async save(data, id, options) {
    if (id) {
      return await this.#update(id, data, options);
    }

    const createdEntity = await this.#model.create(data);
    return createdEntity;
  }

  async all(options) {
    return await this.#model.findAll(options);
  }

  async one(value, attribute = 'id', options = {}) {
    return await this.#model.findOne({
      where: { [attribute]: value },
      ...options,
    });
  }

  async #update(id, data, attribute = 'id') {
    await this.#model.update(data, {
      where: { [attribute]: id },
    });
    const result = await this.one(id, attribute);
    return result;
  }

  async delete(id, attribute = 'id') {
    return await this.#model.destroy({ where: { [attribute]: id } });
  }
}

module.exports = Repository;
