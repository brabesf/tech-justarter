import { GraphQLNonNull, GraphQLString } from 'graphql';

import lawsuitsAPI from '../../../../apis/lawsuitsAPI';
import { SearchResponseType } from '../typeDefs';

export const getSearchQuery = {
  type: SearchResponseType,
  args: {
    query: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (root, { query }) => {
    return lawsuitsAPI.search(query);
  },
};
