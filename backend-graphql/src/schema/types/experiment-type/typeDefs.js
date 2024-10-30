import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';

export const ExperimentTypeType = new GraphQLObjectType({
  name: 'ExperimentType',
  description: 'Type of the experiment',
  fields: () => ({
    name: { type: GraphQLString },

  }),
});
