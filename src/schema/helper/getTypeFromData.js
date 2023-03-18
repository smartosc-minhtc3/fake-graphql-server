import { GraphQLObjectType } from 'graphql';
import {
  isInt,
  isArray,
  isObject,
  isString,
  isBoolean,
  isFloat,
} from '../../utils/checkType';
import { TYPE } from '../types/base';

const getTypeFromField = (value, name) => {
  if (isArray(value)) return TYPE.ARRAY(getTypeFromData(value[0], name));

  if (isString(value)) return TYPE.STRING;
  if (isInt(value)) return TYPE.INT;
  if (isBoolean(value)) return TYPE.BOOLEAN;
  if (isFloat(value)) return TYPE.FLOAT;
  return TYPE.EXCEPTION;
};

const getFieldsFromData = (data) => {
  const fields = {};
  Object.entries(data).forEach(([key, data]) => {
    fields[key] = {
      type: getTypeFromData(data, key),
    };
  });
  return fields;
};

const existedFields = [];
const getTypeFromData = (data, name) => {
  if (!isObject(data)) {
    return getTypeFromField(data, name);
  }
  if (Object.keys(data).length === 0) {
    throw new Error(
      `getTypeFromData: Object (${name}) in schema data must have at least one property`,
    );
  }

  while (existedFields.includes(name)) {
    name = name + '_';
  }
  existedFields.push(name);

  return new GraphQLObjectType({
    name,
    fields: getFieldsFromData(data),
  });
};

export default getTypeFromData;
