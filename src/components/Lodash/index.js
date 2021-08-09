import React from 'react';
import { flattenDepth } from 'lodash';
import mockData from '../../mock/product.json';

/** flattenDepth: 尋找 product_id === '12783' 返回 index // 没有找到为返回-1
 */

const newIndex = flattenDepth(mockData, 2);

function Lodash() {
    return (
        <ul>
           {newIndex.map((item, index) => index)}
        </ul>
    );
}

export default Lodash;
