import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const PlanButtonType = new GraphQLObjectType({
  name: 'PlanButton',
  description: 'Button for next plan',
  fields: () => ({
    label: { type: GraphQLString },
  }),
});
