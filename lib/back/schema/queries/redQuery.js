const { GraphQLString } = require('graphql');
const { GraphQLRed } = require('../nodes');

const RedQuery = {
  type: GraphQLRed,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, { id }) => {
    return 'Red Query';
  }
};

module.exports = { RedQuery };
