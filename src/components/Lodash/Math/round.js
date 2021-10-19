import React from 'react';
import { floor, round } from 'lodash';
import mockData from '../../mock/product.json';

/** floor: 保留幾位數
 *  round: 四捨五入
 */


function Lodash() {
  return (
    <ul>
      <li> {floor(0.0465, 3)}</li>
      <li> {round(0.0465, 3)}</li>
    </ul>
  );
}

export default Lodash;



