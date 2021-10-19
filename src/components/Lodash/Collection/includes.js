import React from 'react';
import { includes, isNil } from 'lodash';
import mockData from '../../mock/product.json';

/** includes: 檢查參考值是否在集合中
 */

const newObj = mockData.map(item => includes(item, '莊臣') ? item.product_id : null)

function Lodash() {
  return (
    <ul>
      {newObj.map(item => !isNil(item) && <li>{item}</li>)}
    </ul>
  );
}

export default Lodash;



