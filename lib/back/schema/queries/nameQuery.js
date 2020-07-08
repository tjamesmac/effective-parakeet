const { GraphQLString } = require('graphql');
const { GraphQLName } = require('../nodes');

const NameQuery = {
  type: GraphQLName,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, { id }) => {
    return 'Thomas Query';
  }
};

module.exports = { NameQuery };
