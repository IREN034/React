import React from 'react';
import { differenceBy } from 'lodash';
// import mockData from '../../mock/product.json';

/** differenceBy: 以第一個 [] 為基準 比較內容 
 *  Math.floor 回傳小於等於所給數字的最大整數
 */
const newObj1 = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); 
const newObj2 = differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'); 

function Lodash() {
    return (
        <>
        <ul>
            {newObj1.map(list => (
                <li>{list}</li>
            ))}
        </ul>
        <ul>
            {newObj2.map(list => (
                <li>{list.x}</li>
            ))}
        </ul>
        </>
    );
}

export default Lodash;
