import { GraphQLObjectType } from 'graphql';

import { PlanBodyType } from '../plan-body/typeDefs';
import { PlanFooterType } from '../plan-footer/typeDefs';
import { PlanHeaderType } from '../plan-header/typeDefs';

export const PlanOfferType = new GraphQLObjectType({
  name: 'Offer',
  description: 'Offer modal for plan update',
  fields: () => ({
    header: { type: PlanHeaderType },
    body: { type: PlanBodyType },
    footer: { type: PlanFooterType },
  }),
});
