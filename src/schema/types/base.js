import {
  GraphQLScalarType,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const GraphQLException = new GraphQLScalarType({
  name: 'Exception',
  description:
    'The value of this fields in responseData maybe null or undefined',
});
export const TYPE = {
  EXCEPTION: GraphQLException,
  STRING: GraphQLString,
  INT: GraphQLInt,
  BOOLEAN: GraphQLBoolean,
  FLOAT: GraphQLFloat,
  ARRAY: (type) => new GraphQLList(type),
};

export const getInputType = (type, isRequired) => {
  const inputType = isRequired ? new GraphQLNonNull(type) : type;
  return {
    type: inputType,
  };
};
const GraphQLAny = new GraphQLScalarType({
  name: 'Any',
  description: 'When you do not know what type of GraphQL params is, use it ^^',
});
export const INPUT_REQUIRED = true;
export const INPUT_TYPE = {
  ANY: (required) => getInputType(GraphQLAny, required),
  STRING: (required) => getInputType(TYPE.STRING, required),
  INT: (required) => getInputType(TYPE.INT, required),
  BOOLEAN: (required) => getInputType(TYPE.BOOLEAN, required),
  FLOAT: (required) => getInputType(TYPE.FLOAT, required),
  ARRAY: ({ type, isRequired }) =>
    getInputType(new GraphQLList(type), isRequired),
};
