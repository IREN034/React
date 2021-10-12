import React from 'react';
import { pull, pullAll } from 'lodash';
// import mockData from '../../mock/product.json';

/** pull: 移除数组array中所有和给定值相等的元素 和_.without 方法不同，这个方法会改变数组
 */

const mockData = [1, 5, 3]
// const newIndex = pull(mockData, 2, 3, 5);
const newIndex = pullAll(mockData, [2, 3,]);

function Lodash() {
  return (
    <ul>
      {newIndex}
    </ul>
  );
}

export default Lodash;
