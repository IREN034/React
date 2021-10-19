import React from 'react';
import { startsWith } from 'lodash';
import mockData from '../../mock/product.json';

/** startsWith: 檢查該位置的字串是否為目標字串
 */

const newObj = startsWith("abc", "b", 1);

function Lodash() {
  return (
    <ul>
      {console.log(newObj)}
    </ul>
  );
}

export default Lodash;



