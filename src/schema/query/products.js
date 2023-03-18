import createRootField from '../helper/createRootField';
import ProductInput from '../types/ProductInput';

export default createRootField({
  key: 'products',
  params: {
    input: ProductInput,
  },
  responseData: {
    items: [
      {
        id: 12,
        sku: '0012501445',
        name: 'スターバックス　カフェ ラテ1箱(12杯分)',
        external_url: null,
        no_product_type: null,
        image: {
          url:
            'https://preprod.boservices.onlineshop.nestle.jp/media/catalog/product/cache/bf1c05d29dcf8bcd8c2ea5920707b9f6/1/2/12501445_1.jpg',
        },
        price_range: {
          minimum_price: {
            regular_price: {
              value: 1274.400001,
              currency: 'JPY',
            },
            final_price: {
              value: 1274.400001,
              currency: 'JPY',
            },
            discount: {
              amount_off: 0,
              percent_off: 0,
            },
          },
        },
        url_key: '0012501445',
        description: {
          html: '',
        },
        case_display: 1,
        unit_qty: null,
      },
      {
        id: 10,
        sku: '0012497454',
        name: 'スターバックス 抹茶 ラテ 1箱(6杯分)',
        external_url: null,
        no_product_type: null,
        image: {
          url:
            'https://preprod.boservices.onlineshop.nestle.jp/media/catalog/product/cache/bf1c05d29dcf8bcd8c2ea5920707b9f6/1/2/12497454_1109.png',
        },
        price_range: {
          minimum_price: {
            regular_price: {
              value: 1274.400001,
              currency: 'JPY',
            },
            final_price: {
              value: 1274.400001,
              currency: 'JPY',
            },
            discount: {
              amount_off: 0,
              percent_off: 0,
            },
          },
        },
        url_key: '0012497454',
        description: {
          html: '',
        },
        case_display: 1,
        unit_qty: null,
      },
      {
        id: 8,
        sku: '0012452800',
        name: 'スターバックス ハウス ブレンド 1箱(60杯分)',
        external_url: null,
        no_product_type: null,
        image: {
          url:
            'https://preprod.boservices.onlineshop.nestle.jp/media/catalog/product/cache/bf1c05d29dcf8bcd8c2ea5920707b9f6/1/2/12452800.jpg',
        },
        price_range: {
          minimum_price: {
            regular_price: {
              value: 4838.400001,
              currency: 'JPY',
            },
            final_price: {
              value: 4838.400001,
              currency: 'JPY',
            },
            discount: {
              amount_off: 0,
              percent_off: 0,
            },
          },
        },
        url_key: '0012452800',
        description: {
          html: '',
        },
        case_display: 1,
        unit_qty: null,
      },
      {
        id: 3,
        sku: '0012504722',
        name: 'スターバックス サニー デイ ブレンド1箱(12杯分)',
        external_url: null,
        no_product_type: null,
        image: {
          url:
            'https://preprod.boservices.onlineshop.nestle.jp/media/catalog/product/cache/bf1c05d29dcf8bcd8c2ea5920707b9f6/0/1/012504722g01_1.jpg',
        },
        price_range: {
          minimum_price: {
            regular_price: {
              value: 1077.840001,
              currency: 'JPY',
            },
            final_price: {
              value: 1077.840001,
              currency: 'JPY',
            },
            discount: {
              amount_off: 0,
              percent_off: 0,
            },
          },
        },
        url_key: '0012504722',
        description: {
          html: '',
        },
        case_display: 1,
        unit_qty: null,
      },
      {
        id: 2,
        sku: '0012483856',
        name: 'スターバックス アイス アメリカーノ1箱(12杯分)',
        external_url: null,
        no_product_type: null,
        image: {
          url:
            'https://preprod.boservices.onlineshop.nestle.jp/media/catalog/product/cache/bf1c05d29dcf8bcd8c2ea5920707b9f6/0/1/012483856g01.jpg',
        },
        price_range: {
          minimum_price: {
            regular_price: {
              value: 1077.840001,
              currency: 'JPY',
            },
            final_price: {
              value: 1077.840001,
              currency: 'JPY',
            },
            discount: {
              amount_off: 0,
              percent_off: 0,
            },
          },
        },
        url_key: '0012483856',
        description: {
          html: '',
        },
        case_display: 1,
        unit_qty: null,
      },
      {
        id: 67,
        sku: 'RIENDG0004',
        name: 'RIEScheduled Change スターバックス ハウス ブレンド 1箱(60杯分)',
        external_url: null,
        no_product_type: null,
        image: {
          url:
            'https://preprod.boservices.onlineshop.nestle.jp/media/catalog/product/cache/bf1c05d29dcf8bcd8c2ea5920707b9f6/0/1/012423707g01_2.jpg',
        },
        price_range: {
          minimum_price: {
            regular_price: {
              value: 4212.000001,
              currency: 'JPY',
            },
            final_price: {
              value: 4212.000001,
              currency: 'JPY',
            },
            discount: {
              amount_off: 0,
              percent_off: 0,
            },
          },
        },
        url_key: 'riendg0004',
        description: {
          html: '検索結果画面に表示します',
        },
        case_display: 1,
        unit_qty: null,
      },
    ],
    total_count: 6,
    page_info: {
      page_size: 16,
      current_page: 1,
      total_pages: 1,
    },
  },
});
