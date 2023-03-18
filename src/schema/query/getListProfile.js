import createRootField from '../helper/createRootField';
import { INPUT_TYPE } from '../types/base';

export default createRootField({
  key: 'getListProfile',
  params: {
    product_id: INPUT_TYPE.INT(),
  },
  responseData: {
    profiles: [
      {
        profile_id: 2001911957,
        course_name: 'midori123',
        frequency_interval: 1,
        frequency_unit: 'month',
        delivery_type: '',
        next_delivery_date_format: '2021/01/23',
        shipping_fee: '450.0000',
        delivery_type_name: 'マークなし宅配便 ',
        allow_change_product: 1,
      },
    ],
    no_scription: 'no_scription',
  },
});
