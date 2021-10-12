import React from 'react';
import { pullAt } from 'lodash';
import mockData from '../../mock/product.json';

/** pullAt: 根據索引 移除array中对应的元素，并返回被移除元素的数组
 */

const newIndex = pullAt(mockData, 1, 3);

function Lodash() {
  return (
    <ul>
      {newIndex.map((item, index) => <li>{index}-{item.product_id}</li>)}
    </ul>
  );
}

export default Lodash;
