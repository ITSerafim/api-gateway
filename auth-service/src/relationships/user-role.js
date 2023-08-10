const Role = require('../models/role');
const User = require('../models/user');

Role.belongsToMany(User, { through: 'user-role', as: 'users', foreignKey: 'user_id' });
User.belongsToMany(Role, { through: 'user-role', as: 'roles', foreignKey: 'role_id' });
