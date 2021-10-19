import React from 'react';
import { map } from 'lodash';
import mockData from '../../mock/product.json';

/** map: 
 */

const newObj = map(mockData, 'product_id');

function Lodash() {
  return (
    <ul>
      {newObj.map(item => <li>{item}</li>)}
    </ul>
  );
}

export default Lodash;