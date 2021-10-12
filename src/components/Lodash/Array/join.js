import React from 'react';
import { join, split } from 'lodash';
// import mockData from '../../mock/product.json';

/** join: [1, 5, 3] 轉成 字串'1,5,3'
 *  split: 字串'1,5,3' 根据separator 拆分字符串string 轉成 [1, 5, 3]
 */

const mockData = [1, 5, 3]
const newIndex = join(mockData, '-');
const newIndexCopy = split(newIndex, '-');

function Lodash() {
    return (
        <ul>
            {newIndex}
            {newIndexCopy.map(item => item)}
        </ul>
    );
}

export default Lodash;
