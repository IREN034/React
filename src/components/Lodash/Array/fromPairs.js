import React from 'react';
import { fromPairs } from 'lodash';
// import mockData from '../../mock/product.json';

/** fromPairs: 与_.toPairs正好相反 [] 轉 {}
 */

const mockData = [['fred', 30], ['barney', 40]]
const newObj = fromPairs(mockData);
console.log(newObj)

function Lodash() {
    return (
        <ul>
            {newObj.fred}
        </ul>
    );
}

export default Lodash;
