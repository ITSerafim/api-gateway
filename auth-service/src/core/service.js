const logger = require('../configs/logger');
const Role = require('../models/role');

class Service {
  #repository;

  constructor(Model, Repository) {
    this.#repository = new Repository(Model);
    this.query = this.query.bind(this);
    this.mutation = this.mutation.bind(this);
  }

  async query(_, object) {
    try {
      if (object.id) {
        const result = await this.#repository.one(object.id, {
          include: [
            {
              model: Role,
              as: 'roles',
              attributes: ['id', 'name'],
              through: {
                attributes: [],
              },
            },
          ],
        });
        this.#log('getOne', result);
        return result;
      }
      const entity = await this.#repository.all({
        include: [
          {
            model: Role,
            as: 'roles',
            attributes: ['id', 'name'],
            through: {
              attributes: [],
            },
          },
        ],
      });
      this.#log('getAll', entity);
      return entity;
    } catch (error) {
      this.#log('error', error);
    }
  }

  async mutation(_, object) {
    try {
      if (object.id) {
        const updatedEntity = await this.#repository.save(
          object.data,
          object.id
        );
        this.#log('create', updatedEntity);
        return updatedEntity;
      }

      const createdEntity = await this.#repository.save(object.input, null, {
        include: {
          model: Role,
          as: 'roles',
        },
      });

      const role = await Role.findByPk(object.input.role_id);

      createdEntity.addRole(role, { through: 'user-role' });

      this.#log('update', createdEntity);
      return createdEntity;
    } catch (error) {
      this.#log('error', error);
    }
  }

  #log(type, value) {
    switch (type) {
      case 'getAll':
        logger.info(`Success get all entities: ${value}`);
        break;
      case 'getOne':
        logger.info(`Success get entity: ${value}`);
        break;
      case 'create':
        logger.info(`Success create entity with data: ${value}`);
        break;
      case 'update':
        logger.info(`Success update entity with data: ${value}`);
        break;
      case 'error':
        logger.info(`Success create entity with data: ${value}`);
        break;
    }
  }
}

module.exports = Service;
