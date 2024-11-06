import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import { PlanButtonType } from '../plan-button/typeDefs';
import { PlanPriceType } from '../plan-price/typeDefs';

export const PlanBodyType = new GraphQLObjectType({
  name: 'PlanBody',
  description: 'Body for next plan modal',
  fields: () => ({
    benefits: { type: new GraphQLList(GraphQLString) },
    price: { type: PlanPriceType },
    button: { type: PlanButtonType },
  }),
});
