import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';

export const PlanFooterType = new GraphQLObjectType({
  name: 'PlanFooter',
  description: 'Footer for next plan modal',
  fields: () => ({
    text: { type: GraphQLString },
  }),
});
