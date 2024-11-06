import { GraphQLObjectType, GraphQLString } from 'graphql';

export const PlanButtonType = new GraphQLObjectType({
  name: 'PlanButton',
  description: 'Button for next plan',
  fields: () => ({
    label: { type: GraphQLString },
  }),
});
