import React from 'react';
import { forEach } from 'lodash';
// import mockData from '../../mock/product.json';

/** forEach: 
 */

const newInfo = [];
forEach({ a: 1, b: 2 }, (value, key) => newInfo.push(value))

function Lodash() {
  return (
    <ul>
      {newInfo.map(item => <li>{item}</li>)}
    </ul>
  );
}

export default Lodash;



