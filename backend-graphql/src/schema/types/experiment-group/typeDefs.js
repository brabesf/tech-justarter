import { GraphQLObjectType, GraphQLString } from 'graphql';

export const ExperimentGroupType = new GraphQLObjectType({
  name: 'ExperimentGroup',
  description: 'Group of the experiment',
  fields: () => ({
    name: { type: GraphQLString },
  }),
});
