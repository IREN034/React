import React from 'react';
import { fill } from 'lodash';
import mockData from '../../mock/product.json';

/** fill: 替换 從開始到結束的值
 */

const newObj = fill(mockData, { name: 'a'}, 1, 3);

function Lodash() {
    return (
        <ul>
            {newObj.map(list => (
                <li>{list.name}</li>
            ))}
        </ul>
    );
}

export default Lodash;
