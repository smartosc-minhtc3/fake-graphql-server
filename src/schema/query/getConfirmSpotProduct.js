import createRootField from '../helper/createRootField';
import { INPUT_REQUIRED, INPUT_TYPE } from '../types/base';

export default createRootField({
  key: 'getConfirmSpotProduct',
  params: {
    profile_id: INPUT_TYPE.INT(INPUT_REQUIRED),
    product_id: INPUT_TYPE.STRING(),
    product_qty: INPUT_TYPE.INT(),
    is_add_sub: INPUT_TYPE.INT(),
  },
  responseData: {
    profile: {
      course_name:
        '【定期便】エコ＆システムパック定期お届け便（マシンレンタル_バリスタアイ）_05',
      order_times: '17',
      frequency_name: '1ヶ月に1回',
      next_delivery_date: '2019/08/20',
      next_delivery_date_d: 'Tue',
    },
    address: {
      name: 'パフォーマンステスト０２',
      address: '650-0001 兵庫県 神戸市中央区加納町 ',
      telephone: '0782307000',
      delivery_information: '',
    },
    product_already: [
      {
        image:
          'http://riki.dev.nestle.jp/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/0/0/0009416806.jpg',
        name: 'キットカット ミニ 14枚',
        price: '291',
        is_spot: false,
        allow_seasonal_skip: true,
        seasonal_skip_optional: true,
        qty: '13 個',
        subtotal: '3783',
      },
      {
        image:
          'http://riki.dev.nestle.jp/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/0/0/0012315983.jpg',
        name:
          '【おすすめ】ネスカフェ  プレジデント エコ＆システムパック ６０ｇ',
        price: '1067',
        is_spot: false,
        allow_seasonal_skip: false,
        seasonal_skip_optional: false,
        qty: '1 個',
        subtotal: '1067',
      },
      {
        image:
          'http://riki.dev.nestle.jp/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/0/1/012342361g08.jpg',
        name: 'ネスカフェ ゴールドブレンド オーガニック 55g',
        price: '938',
        is_spot: false,
        allow_seasonal_skip: false,
        seasonal_skip_optional: false,
        qty: '1 個',
        subtotal: '938',
      },
      {
        image:
          'http://riki.dev.nestle.jp/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/0/1/012343581g08.jpg',
        name: '【おすすめ】ネスカフェ 香味焙煎 丸み ケニアブレンド 55g',
        price: '812',
        is_spot: false,
        allow_seasonal_skip: false,
        seasonal_skip_optional: false,
        qty: '1 個',
        subtotal: '812',
      },
      {
        image:
          'http://riki.dev.nestle.jp/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/k/k/kkch_sublime_milk_b.jpg',
        name: 'キットカット ショコラトリー サブリム ミルク',
        price: '324',
        is_spot: false,
        allow_seasonal_skip: false,
        seasonal_skip_optional: false,
        qty: '1 個',
        subtotal: '324',
      },
      {
        image:
          'http://riki.dev.nestle.jp/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/_/0/_012341519g08.jpg',
        name: 'ネスレ ブライト スティック クリーミーラテ用 5P',
        price: '108',
        is_spot: false,
        allow_seasonal_skip: false,
        seasonal_skip_optional: false,
        qty: '1 個',
        subtotal: '108',
      },
      {
        image:
          'http://riki.dev.nestle.jp/pub/media/catalog/product/placeholder/default/111111_3.png',
        name: 'reidm000002',
        price: '588',
        is_spot: true,
        allow_seasonal_skip: true,
        seasonal_skip_optional: true,
        qty: '1 個',
        subtotal: '588',
      },
    ],
    product_added: {
      id: '6816',
      image:
        'http://riki.dev.nestle.jp/pub/media/catalog/product/placeholder/default/111111_3.png',
      name: 'reidm000002',
      price: '588',
      qty: '1個',
      subtotal: '588',
      delivery_type: 'cool',
    },
    shipping_price: '0',
    paid_services: null,
    payment_fee: '324',
    point_now: '100',
    point_earn: '13',
    campaign: ['Discount 100'],
    subtotal: '1918',
    discount_amount: '0',
    payment_amount: '8436',
    payment_method_title: '代金引換払い',
    coupon_applied: [],
    is_show_address_stock_point: false,
    time_slot: false,
    hidden_input: {
      qty: 1,
      product_options: null,
      unit_case: 'EA',
      unit_qty: 1,
      gw_id: null,
      gift_message_id: null,
    },
    validate_message: '',
  },
});
