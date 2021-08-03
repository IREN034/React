import React from 'react';
import { compact } from 'lodash';
import mockData from '../../mock/product.json';

/** compact: 創建一個刪除所有 falsey 值的數組
 *  false，null，0，""，undefined，和NaN是falsey
 *  {} [] 不是falsey: 要測試要改一下 mockData 唷
 */
const newObj = compact(mockData);

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
