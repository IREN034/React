import React from 'react';
import { flattenDeep } from 'lodash';
// import mockData from '../../mock/product.json';

/** flattenDeep:  遞歸為一維數組
 */

const mockData = [1, 5, 3, [4], [2, [6]]]
const newIndex = flattenDeep(mockData);

console.log(mockData, newIndex)

function Lodash() {
    return (
        <ul>
           {newIndex.map((item, index) => item)}
        </ul>
    );
}

export default Lodash;
