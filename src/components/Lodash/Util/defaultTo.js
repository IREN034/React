import React from 'react';
import { defaultTo } from 'lodash';
import mockData from '../../mock/product.json';

/** defaultTo: 如果數值為 NaN 、 null 、 undefined 就返回預設值
 */


function Lodash() {
  return (
    <ul>
      {mockData.map(item => <li>{defaultTo(item.untaxed_moving_average_cost, '*')}</li>)}
    </ul>
  );
}

export default Lodash;



