import { GraphQLSchema } from 'graphql';
import mutationRootFields from './mutation';
import queryRootFields from './query';

const schema = new GraphQLSchema({
  query: queryRootFields,
  mutation: mutationRootFields,
});

export default schema;
