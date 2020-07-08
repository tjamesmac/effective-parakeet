const { buildSchema } = require('graphql');

const { typeDefs } = require('./typeDefs');

const schema = buildSchema(typeDefs);

module.exports = schema;
