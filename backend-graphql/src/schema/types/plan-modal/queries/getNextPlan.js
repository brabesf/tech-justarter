import nextPlanAPI from '../../../../apis/nextPlanAPI';
import { PlanOfferType } from '../typeDefs';

export const getNextPlanQuery = {
  type: PlanOfferType,
  resolve: async () => {
    return nextPlanAPI.getPlan();
  },
};
