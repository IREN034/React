import React from 'react';
import { join } from 'lodash';
// import mockData from '../../mock/product.json';

/** join: [1, 5, 3] 轉成 字串'1,5,3'
 */

const mockData = [1, 5, 3]
const newIndex = join(mockData, ',');

function Lodash() {
    return (
        <ul>
           {newIndex}
        </ul>
    );
}

export default Lodash;
