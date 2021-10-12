import React from 'react';
import { pullAllBy } from 'lodash';
import mockData from '../../mock/product.json';

/** pullAllBy: 不同于_.differenceBy, 这个方法会改变原始数组 array
 */

const removeData = [{
  "product_id": "14927",
}, {
  "product_id": "14918",
}]
const newIndex = pullAllBy(mockData, removeData, 'product_id');

function Lodash() {
  return (
    <ul>
      {newIndex.map((item, index) => <li>{index}-{item.product_id}</li>)}
    </ul>
  );
}

export default Lodash;
