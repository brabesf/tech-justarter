import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const PlanPriceType = new GraphQLObjectType({
  name: 'PlanPrice',
  description: 'Price for next plan',
  fields: () => ({
    current: { type: GraphQLString },
    next: { type: GraphQLString },
    period: { type: GraphQLString },
  }),
});
