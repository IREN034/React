import React from 'react';
import { difference } from 'lodash';
// import mockData from '../../mock/product.json';

/** difference: 以第一個 [] 為基準 比較所有 [] 的內容 
 * 
 */
const newObj = difference([ 2, 1, 5, 6], [ 2, 3, 4 ], [ 5, 3, 4, 6 ]);

function Lodash() {
    return (
        <ul>
            {newObj.map(list => (
                <li>{list}</li>
            ))}
        </ul>
    );
}

export default Lodash;
