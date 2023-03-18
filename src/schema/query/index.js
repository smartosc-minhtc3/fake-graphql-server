import { GraphQLObjectType } from 'graphql';
import getConfirmSpotProduct from './getConfirmSpotProduct';
import getListProfile from './getListProfile';
import products from './products';

const queryRootFields = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...getListProfile,
    ...getConfirmSpotProduct,
    ...products,
  },
});

export default queryRootFields;
