import React from 'react';
import { intersection } from 'lodash';
// import mockData from '../../mock/product.json';

/** intersection: 陣列內容相互比較 回傳 陣列的交集
 */

const mockData = [1, 3, 5, 4]
const newObj = intersection(mockData, [5, 4, 6], [7, 4, 8]);

function Lodash() {
    return (
        <ul>
            {newObj.map(item => <li>{item}</li>)}
        </ul>
    );
}

export default Lodash;
