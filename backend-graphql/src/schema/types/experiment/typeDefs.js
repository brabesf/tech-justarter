import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLBoolean } from 'graphql';
import { ExperimentGroupType } from '../experiment-group/typeDefs';
import { ExperimentAlternativeType } from '../experiment-alternative/typeDefs';
import { ExperimentTypeType } from '../experiment-type/typeDefs';  

export const ExperimentType = new GraphQLObjectType({
  name: 'Experiment',
  description: 'Experiment for user',
  fields: () => ({
    alternative: { type: ExperimentAlternativeType},
    client_id: { type: GraphQLString},
    experiment: { type: ExperimentTypeType},
    experiment_group: { type: ExperimentGroupType},
    participating: { type: GraphQLBoolean},
    simulating: { type: GraphQLBoolean},
    status: { type: GraphQLString},
  }),
});
