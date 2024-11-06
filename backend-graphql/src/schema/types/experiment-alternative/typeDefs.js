import { GraphQLObjectType, GraphQLString } from 'graphql';

export const ExperimentAlternativeType = new GraphQLObjectType({
  name: 'ExperimentAlternative',
  description: 'Alternative for the user experiment',
  fields: () => ({
    name: { type: GraphQLString },
  }),
});
