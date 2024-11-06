import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from 'graphql';

import experimentAPI from '../../../../apis/experimentAPI';
import { ExperimentType } from '../typeDefs';

export const experimentData = {
  type: ExperimentType,
  args: {
    alternative: { type: new GraphQLNonNull(GraphQLString) },
    simulating: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  resolve: async (root, { alternative, simulating }) => {
    return experimentAPI.getExperiment(alternative, simulating);
  },
};
