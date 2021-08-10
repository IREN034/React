import React from 'react';
import { lastIndexOf } from 'lodash';
// import mockData from '../../mock/product.json';

/** lastIndexOf: 類似 indexOf 從最後一筆往前找 沒有匹配返回 -1
 */

const mockData = [6, 7, 3, 2]
const newIndex = lastIndexOf(mockData, 2);

function Lodash() {
    return (
        <ul>
           {newIndex}
        </ul>
    );
}

export default Lodash;
