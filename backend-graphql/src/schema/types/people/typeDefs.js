import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const RelatedPeopleType = new GraphQLObjectType({
  name: 'RelatedPeople',
  description: 'Related people of a lawsuit',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
