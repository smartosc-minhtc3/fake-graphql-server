import { GraphQLInputObjectType } from 'graphql';
import { getInputType, INPUT_TYPE } from './base';

const ProductAttributeSortInput = new GraphQLInputObjectType({
  name: 'ProductAttributeSortInput',
  fields: {
    name: INPUT_TYPE.STRING(),
  },
});

const ProductInputType = new GraphQLInputObjectType({
  name: 'productInput',
  fields: {
    search: INPUT_TYPE.STRING(),
    filter: INPUT_TYPE.ANY(),
    pageSize: INPUT_TYPE.INT(),
    currentPage: INPUT_TYPE.INT(),
    sort: getInputType(ProductAttributeSortInput),
  },
});

export default getInputType(ProductInputType);
