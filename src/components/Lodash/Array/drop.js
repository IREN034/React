import React from 'react';
import { drop } from 'lodash';
import mockData from '../../mock/product.json';

/** drop: 去除array前面的n个元素
 *  
 */

const newObj = drop(mockData, 10); 

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
