class AbstractGraphqlRequests {
  #service;

  constructor(Model, Service, Repository) {
    this.#service = new Service(Model, Repository);
    this.query = this.query.bind(this);
    this.mutation = this.mutation.bind(this);
  }

  /**
   *
   * @param {*} _
   * @param {data: object, id?: string } object
   * @param {one: object, all: object} queryOptions
   * @returns
   */
  async query(_, object, queryOptions) {
    try {
      if (object.id) {
        return await this.#service.getOne(object.id, queryOptions.one);
      }
      return await this.#service.getAll(object.id, queryOptions.all);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * @param {*} _
   * @param {data: object, id?: string } object
   * @param {create: object, update: object} mutationOptions
   * @returns
   */
  async mutation(_, object, mutationOptions) {
    try {
      if (object.id) {
        return await this.#service.action(object.id, mutationOptions.update);
      }
      return await this.#service.action(object.data, mutationOptions.create);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AbstractGraphqlRequests;
