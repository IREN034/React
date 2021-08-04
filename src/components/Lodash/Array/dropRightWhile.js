import React from 'react';
import { dropRightWhile } from 'lodash';
import mockData from '../../mock/product.json';

/** dropRightWhile: 去除 找到最後一筆 true 後到尾部的值(刪尾巴)
 *  https://www.coder.work/article/3856805
 */

const newObj = dropRightWhile(mockData,  o => { return !o.isSet; });

function Lodash() {
    return (
        <ul>
            {newObj.map((list, index) => (
                <li>{index}{list.name}</li>
            ))}
        </ul>
    );
}

export default Lodash;
