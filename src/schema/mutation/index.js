import { GraphQLObjectType } from 'graphql';
import saveSpotProduct from './saveSpotProduct';
import validateSpotProfile from './validateSpotProfile';

const mutationRootFields = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...validateSpotProfile,
    ...saveSpotProduct,
  },
});

export default mutationRootFields;
