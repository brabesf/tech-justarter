import { GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql';

import { LawsuitType } from '../lawsuit/typeDefs';

export const SearchResponseType = new GraphQLObjectType({
  name: 'SearchResponse',
  description: 'Lawsuit search results',
  fields: () => ({
    hits: { type: GraphQLInt },
    lawsuits: { type: new GraphQLList(LawsuitType) },
  }),
});
