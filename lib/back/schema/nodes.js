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

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);

    if (type === 'Name') {
      return 'Thomas';
    }
    return null;
  },
  obj => {
    if (obj instanceof Name) {
      return GraphQLName;
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
      resolve: () => {
        return 'Thomas what now';
      }
    }
  },
  interfaces: [nodeInterface]
});

module.exports = { nodeField, GraphQLName };
