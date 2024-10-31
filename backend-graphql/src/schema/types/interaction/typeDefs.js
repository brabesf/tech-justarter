import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const InteractionType = new GraphQLObjectType({
  name: 'Interaction',
  description: 'An interaction from the user',
  fields: () => ({
    status: { type: GraphQLString },
  }),
});
