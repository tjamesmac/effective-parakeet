const {
  //   GraphQLBoolean,
  //   GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const {
  //   connectionArgs,
  //   connectionDefinitions,
  //   connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions
} = require('graphql-relay');

const { test } = require('../resolvers/name');

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Name') {
      return 'Thomas';
    }
    if (type === 'Red') {
      return 'Foo';
    }
    return null;
  },
  obj => {
    if (obj instanceof Name) {
      return GraphQLName;
    }
    if (obj instanceof Red) {
      return GraphQLRed;
    }
    return null;
  }
);

const GraphQLName = new GraphQLObjectType({
  name: 'Name',
  fields: {
    id: globalIdField('Name'),
    text: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: name => {
        return test(name);
      }
    }
  },
  interfaces: [nodeInterface]
});

const GraphQLRed = new GraphQLObjectType({
  name: 'Red',
  fields: {
    id: globalIdField('Red'),
    foo: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: () => {
        return 'Red here';
      }
    }
  },
  interfaces: [nodeInterface]
});

module.exports = { nodeField, GraphQLName, GraphQLRed };
