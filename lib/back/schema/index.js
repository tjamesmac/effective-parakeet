const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { NameQuery } = require('./queries/nameQuery');
const { RedQuery } = require('./queries/redQuery');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    name: NameQuery,
    red: RedQuery
  }
});

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     name: nameQuery
//   }
// });

const schema = new GraphQLSchema({
  query: Query
});

module.exports = schema;
