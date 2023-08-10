const Service = require('../core/abstract.service');
const Repository = require('../core/abstract.repository');
const Resolver = require('../core/abstract.resolver');
const GraphqlRequests = require('../core/abstract.graphql-requests');
const { orgModel } = require('../models/organization');

const config = {
  queryOptions: {
    one: {
      attribute: '_id',
      sortValue: 'createdAt',
    },
    all: {
      attribute: '_id',
      sortValue: 'createdAt',
    },
  },
  mutationOptions: {
    create: {},
    update: {
      attribute: '_id',
      isReturn: false,
    },
  },
};

const organizationResolver = new Resolver(
  orgModel,
  GraphqlRequests,
  Repository,
  Service,
  config
);

module.exports = {
  organization: organizationResolver.resolve,
  organizations: organizationResolver.resolve,
  createOrganization: organizationResolver.mutate,
  updateOrganization: organizationResolver.mutate,
};
