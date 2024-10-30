import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';
import { PlanFooterType } from '../plan-footer/typeDefs';
import { PlanHeaderType } from '../plan-header/typeDefs';
import { PlanBodyType } from '../plan-body/typeDefs';

export const PlanOfferType = new GraphQLObjectType({
  name: 'Offer',
  description: 'Offer modal for plan update',
  fields: () => ({
    header: { type: PlanHeaderType},
    body: { type: PlanBodyType},
    footer: { type: PlanFooterType},
  }),
});
