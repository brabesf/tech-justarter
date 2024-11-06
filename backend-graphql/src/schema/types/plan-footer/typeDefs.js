import { GraphQLObjectType, GraphQLString } from 'graphql';

export const PlanFooterType = new GraphQLObjectType({
  name: 'PlanFooter',
  description: 'Footer for next plan modal',
  fields: () => ({
    text: { type: GraphQLString },
  }),
});
