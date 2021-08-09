import React from 'react';
import { findLastIndex } from 'lodash';
import mockData from '../../mock/product.json';

/** findLastIndex: 尋找 product_id === '12783' 返回 index // 没有找到为返回-1
 */

const newIndex = findLastIndex(mockData, o => { return o.product_id === '12783'});

function Lodash() {
    return (
        <ul>
           {newIndex} {mockData[newIndex]?.name}
        </ul>
    );
}

export default Lodash;
