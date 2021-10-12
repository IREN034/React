import React from 'react';
import { nth } from 'lodash';
// import mockData from '../../mock/product.json';

/** nth: array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
 */

const mockData = ['a', 'b', 'c', 'd']
const newIndex = nth(mockData, 1);

function Lodash() {
  return (
    <ul>
      {newIndex}
    </ul>
  );
}

export default Lodash;