import React from 'react';
import { dropRight } from 'lodash';
import mockData from '../../mock/product.json';

/** dropRight: 去除array尾部的n个元素
 *  
 */

const newObj = dropRight(mockData, 10); 

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
