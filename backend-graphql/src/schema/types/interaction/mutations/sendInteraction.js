import {GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import mutationAPI from '../../../../apis/mutationAPI';

import { InteractionType } from '../typeDefs';

export const RegisterLastInteraction = {
  type: InteractionType,
  args: {
    lawsuitNumber: { type: new GraphQLNonNull(GraphQLString) },
    movementId: {type: new GraphQLNonNull(GraphQLInt)}
  },
  resolve: async (root, {lawsuitNumber, movementId}) => {
    return mutationAPI.sendMutation({lawsuitNumber, movementId})
  },
  
};
