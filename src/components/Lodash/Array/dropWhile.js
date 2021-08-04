import React from 'react';
import { dropWhile } from 'lodash';
import mockData from '../../mock/product.json';

/** dropWhile: 去除 從開始到找到 true 的值(刪開始)
 *  https://www.coder.work/article/3856805
 */

const newObj = dropWhile(mockData,  o => { return !o.isSet; });

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
