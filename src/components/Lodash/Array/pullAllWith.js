import React from 'react';
import { pullAllWith, isEqual } from 'lodash';
import mockData from '../../mock/product.json';

/** pullAllWith: 接受 comparator 比較兩組數組 这个方法会改变原始数组 array 
 */

const removeData = [{
  "product_id": "14927",
  "product_no": "FT-Y03-0034",
  "isSet": false,
  "name": "FORTE經典風華回齡眼霜N 2mlx3包入",
  "proposed_price": "",
  "gross_profit_margin": "0",
  "cost": "0",
  "untaxed_moving_average_cost": 0,
  "unit_name": "",
  "safety_stock": "0",
  "dynamic_safety_stock_quantity": "",
  "market_price": "",
  "vendor_id": "44",
  "vendor_no": "0011",
  "alias_name": "台塑生醫",
  "brand_name": "FORTE",
  "original_product_no": "",
  "image_info": [],
  "created_at": "2021-07-30 16:26:16",
  "updated_at": "2021-08-03 19:05:25",
  "status": "",
  "button": [
    "EDIT",
    "COPY"
  ],
  "quantity": "0",
  "spec_type": "NONE",
  "spec_name_1": "",
  "spec_name_2": "",
  "sub_product_info": [
    {
      "product_id": "12548",
      "product_no": "FT-ANLDFFL00020",
      "name": "(贈品)FORTE經典風華回齡眼霜N 2ml",
      "quantity": "3"
    }
  ],
  "attribute": "GENERAL",
  "is_enable": true,
  "product_purchase_category_name": ""
}]
const newIndex = pullAllWith(mockData, removeData, isEqual);

function Lodash() {
  return (
    <ul>
      {newIndex.map((item, index) => <li>{index}-{item.product_id}</li>)}
    </ul>
  );
}

export default Lodash;
