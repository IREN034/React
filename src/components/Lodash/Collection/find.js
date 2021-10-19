import React from 'react';
import { find } from 'lodash';
import mockData from '../../mock/product.json';

/** find: 回傳第一個滿足所提供之測試函式的元素值
 */

const newObj = find(mockData, (value) => value.alias_name === '莊臣')

function Lodash() {
  return (
    <ul>
      {newObj.product_id}
    </ul>
  );
}

export default Lodash;



