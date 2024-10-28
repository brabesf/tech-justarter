import { GraphQLNonNull, GraphQLString } from 'graphql';

import { SearchResponseType } from '../typeDefs';
import lawsuitsAPI from '../../../../apis/lawsuitsAPI';

export const getSearchQuery = {
  type: SearchResponseType,
  args: {
    query: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (root, { query }) => {
    return lawsuitsAPI.search(query);
  },
};
