const {
  organization,
  organizations,
  createOrganization,
  updateOrganization,
} = require('./organization.resolver');

module.exports = {
  Query: {
    organization,
    organizations,
  },
  Mutation: {
    createOrganization,
    updateOrganization,
  },
};
