import createRootField from '../helper/createRootField';
import { INPUT_REQUIRED, INPUT_TYPE } from '../types/base';

export default createRootField({
  key: 'validateSpotProfile',
  params: {
    profile_id: INPUT_TYPE.INT(INPUT_REQUIRED),
    product_id: INPUT_TYPE.INT(INPUT_REQUIRED),
    product_qty: INPUT_TYPE.INT(INPUT_REQUIRED),
    is_add_sub: INPUT_TYPE.INT(),
  },
  responseData: {
    status: true,
    message: null,
    redirect: null,
  },
});
