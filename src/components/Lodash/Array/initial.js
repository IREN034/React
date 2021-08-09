import React from 'react';
import { initial } from 'lodash';
import mockData from '../../mock/product.json';

/** initial: 去除 [] array中的最後一个元素
 */

// const mockData = [{"product_id": "12783"}]
const newObj = initial(mockData);

function Lodash() {
    return (
        <ul>
            {newObj.map((item, index) => <li>{index} {item.name}</li>)}
        </ul>
    );
}

export default Lodash;
