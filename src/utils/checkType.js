export const isFloat = (value) =>
  typeof value === 'number' &&
  Number.isFinite(value) &&
  !Number.isInteger(value);

export const isInt = (value) => Number.isInteger(value);

export const isBoolean = (value) => typeof value === 'boolean';

export const isString = (value) => typeof value === 'string';

export const isArray = (value) => Array.isArray(value);

export const isObject = (value) =>
  Object.prototype.toString.call(value) === '[object Object]';
