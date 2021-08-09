import React from 'react';
import { intersectionBy } from 'lodash';
import mockData from '../../mock/product.json';

/** intersectionBy: 陣列內容相互比較 回傳 陣列的交集
 *  可使用 product_id
 */

// const mockData = [{"product_id": "12783"}]
const newObj = intersectionBy(mockData,  [{"product_id": "12783"}, {"product_id": "12782"}], 'product_id');

function Lodash() {
    return (
        <ul>
            {newObj.map(item => <li>{item.product_id} {item.name}</li>)}
        </ul>
    );
}

export default Lodash;
