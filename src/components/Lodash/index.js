import React from 'react';
import { indexOf } from 'lodash';
// import mockData from '../../mock/product.json';

/** indexOf: 類似 indexOf 從最後一筆往前找 沒有匹配返回 -1
 */

const mockData = [6, 2, 2, 2]
const newIndex = indexOf(mockData, 2);

function Lodash() {
    return (
        <ul>
           {newIndex}
        </ul>
    );
}

export default Lodash;
