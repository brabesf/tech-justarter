import { GraphQLObjectType, GraphQLString, GraphQLNonNull, Grap } from 'graphql';

export const ActivityType = new GraphQLObjectType({
  name: 'Activity',
  description: 'Activities of a lawsuit',
  fields: () => ({
    date: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
