import React from 'react';
import { head } from 'lodash';
import mockData from '../../mock/product.json';

/** head: 返回第一個內容 等同  mockData[0]
 * 
 */
const newObj = head(mockData);

function Lodash() {
    return (
        <ul>
            {newObj.name}
        </ul>
    );
}

export default Lodash;
