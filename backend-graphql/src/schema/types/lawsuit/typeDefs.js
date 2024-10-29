import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLFloat } from 'graphql';

import { ActivityType } from '../activity/typeDefs';
import { LawyerType } from '../lawyer/typeDefs';
import { RelatedPeopleType } from '../people/typeDefs'

export const LawsuitType = new GraphQLObjectType({
  name: 'Lawsuit',
  description: 'Lawsuit descriptions',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    number: { type: new GraphQLNonNull(GraphQLString) },
    court: { type: new GraphQLNonNull(GraphQLString) },
    nature: { type: new GraphQLNonNull(GraphQLString) },
    kind: { type: new GraphQLNonNull(GraphQLString) },
    subject: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    judge: { type: new GraphQLNonNull(GraphQLString) },
    value: { type:  GraphQLFloat},
    related_people: { type: new GraphQLList(RelatedPeopleType) },
    lawyers: { type: new GraphQLList(LawyerType)},
    activities: { type: new GraphQLList(ActivityType) },
  }),
});
