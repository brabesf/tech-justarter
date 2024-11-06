import { GraphQLObjectType, GraphQLString } from 'graphql';

export const PlanHeaderType = new GraphQLObjectType({
  name: 'PlanHeader',
  description: 'Header for next plan',
  fields: () => ({
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
  }),
});
