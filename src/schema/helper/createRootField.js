import getTypeFromData from './getTypeFromData';

const createRootField = ({ key, params, responseData, description }) => ({
  [key]: {
    type: getTypeFromData(responseData, key),
    args: params || null,
    resolve: () => responseData,
    description: description || null,
  },
});

export default createRootField;
