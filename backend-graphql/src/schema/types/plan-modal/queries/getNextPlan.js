import { PlanOfferType } from '../typeDefs';
import nextPlanAPI from '../../../../apis/nextPlanAPI';

export const getNextPlanQuery = {
  type: PlanOfferType,
  resolve: async (root) => {
    return nextPlanAPI.getPlan();
  },
};
