import React from 'react';
import { flattenDepth } from 'lodash';
// import mockData from '../../mock/product.json';

/** flattenDepth: 根据 depth 递归减少 array 的嵌套层级
 */

const mockData = [1, 5, 3, [4], [2, [6]], 5]
const newIndex = flattenDepth(mockData, 4);

console.log(mockData, newIndex)

function Lodash() {
    return (
        <ul>
           {newIndex.map((item, index) => item)}
        </ul>
    );
}

export default Lodash;
