import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export const LawyerType = new GraphQLObjectType({
  name: 'Lawyer',
  description: 'Lawyer name',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
