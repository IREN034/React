import React from 'react';
import { some } from 'lodash';
import mockData from '../../mock/product.json';

/** some: 檢查是否有符合條件的元素，一旦判斷到符合條件的元素迭代就會停止。回傳布林
 */

const newObj = some(mockData, {
  "alias_name": "莊臣",
});

function Lodash() {
  return (
    <ul>
      {console.log(newObj)}
    </ul>
  );
}

export default Lodash;



