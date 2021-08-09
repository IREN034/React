import React from 'react';
import { intersectionWith, isEqual } from 'lodash';
import mockData from '../../mock/product.json';

/** intersectionWith: 陣列內容相互比較 回傳 陣列的交集
 *  结果值是从第一数组中选择
 */

var others = [{
    "product_id": "14918",
    "product_no": "FT-Y03-0032",
    "isSet": true,
    "name": "FORTE經典風華回齡霜N2mlx3包入",
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
    "created_at": "2021-07-30 16:24:54",
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
            "product_id": "5372",
            "product_no": "udi-0050-FG",
            "name": "(贈品)FORTE經典風華回齡霜N2ml",
            "quantity": "3"
        }
    ],
    "attribute": "GENERAL",
    "is_enable": true,
    "product_purchase_category_name": ""
}];

const newObj = intersectionWith(mockData, others, isEqual);

function Lodash() {
    return (
        <ul>
            {newObj.map(item => item.name)}
        </ul>
    );
}

export default Lodash;
 
// isEqual({ 'a': 1 }, { 'a': 1 });
// => true
 
// { 'a': 1 } === { 'a': 1 };
// => false