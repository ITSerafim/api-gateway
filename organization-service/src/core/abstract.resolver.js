class AbstracResolver {
  #graphql;
  #config;

  constructor(Model, GraphqlRequests, Repository, Service, config) {
    this.#graphql = new GraphqlRequests(Model, Service, Repository);
    this.#config = config;
    this.resolve = this.resolve.bind(this);
    this.mutate = this.mutate.bind(this);
  }

  /**
   *
   * @param {*} _
   * @param {data: object, id?: string} object
   * @returns {Promise}
   */
  async resolve(_, object) {
    return await this.#graphql.query(_, object, this.#config.queryOptions);
  }

  /**
   *
   * @param {*} _
   * @param {data: object, id?: string} object
   * @returns {Promise}
   */
  async mutate(_, object) {
    return await this.#graphql.mutation(
      _,
      object,
      this.#config.mutationOptions
    );
  }
}

module.exports = AbstracResolver;
