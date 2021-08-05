import React from 'react';
import { indexOf } from 'lodash';
// import mockData from '../../mock/product.json';

/** indexOf: 回傳找到的索引值
 *  可設定 開始查詢的位置 [fromIndex=0] (number): 預設為 0 
 */

const mockData = [1, 3, 3, 4]
const newObj = indexOf(mockData, 3, 1);

function Lodash() {
    return (
        <ul>
            {newObj}
        </ul>
    );
}

export default Lodash;
