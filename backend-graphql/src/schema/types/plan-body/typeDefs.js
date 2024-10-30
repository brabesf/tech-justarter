import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';
import { PlanPriceType }from '../plan-price/typeDefs';
import { PlanButtonType } from '../plan-button/typeDefs';

export const PlanBodyType = new GraphQLObjectType({
  name: 'PlanBody',
  description: 'Body for next plan modal',
  fields: () => ({
    benefits: { type: new GraphQLList(GraphQLString) },
    price: { type: PlanPriceType },
    button: { type: PlanButtonType },

  }),
});
