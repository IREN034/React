import React from 'react';
import { chunk } from 'lodash';
import mockData from '../../mock/product.json';

/** chunk: 將 [] 重新分成 5個1組
 * 
 */
const newObj = chunk(mockData, 5);

function Lodash() {
    return (
        <div>
            {newObj.map(list => (
                <ul>{list.map(item => <li>{item.name}</li>)}</ul>
            ))}
        </div>
    );
}

export default Lodash;
