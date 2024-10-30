import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const PlanHeaderType = new GraphQLObjectType({
  name: 'PlanHeader',
  description: 'Header for next plan',
  fields: () => ({
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
  }),
});
