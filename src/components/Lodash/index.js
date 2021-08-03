import React from 'react';
import { differenceWith, isEqual } from 'lodash';
// import mockData from '../../mock/product.json';

/** differenceWith: 以第一個 [] 為基準 比較內容 
 *  isEqual: 確定兩者是否完全相等
 */

const obj = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
const newObj = differenceWith(obj, [{ 'x': 1, 'y': 2 }], isEqual); 

function Lodash() {
    return (
        <ul>
            {newObj.map(list => (
                <li>{list.x}{list.y}</li>
            ))}
        </ul>
    );
}

export default Lodash;
