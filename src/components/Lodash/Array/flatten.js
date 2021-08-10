import React from 'react';
import { flatten } from 'lodash';
// import mockData from '../../mock/product.json';

/** flatten: 減少一級的嵌套深度
 */

const mockData = [1, 5, 3, [4], [2, [6]]]
const newIndex = flatten(mockData);

console.log(mockData, newIndex)

function Lodash() {
    return (
        <ul>
           {newIndex.map((item, index) => item)}
        </ul>
    );
}

export default Lodash;
