const { GraphQLString } = require('graphql');
const { GraphQLName } = require('../nodes');

const NameQuery = {
  type: GraphQLName,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  },
  resolve: (root, { id, name }) => {
    return name;
  }
};

module.exports = { NameQuery };
