import React from 'react';
import { template } from 'lodash';
// import mockData from '../../mock/product.json';

/** template: 
 */

// const compiled = template('hello <%= user %>!');
// const compiled = template('hello ${ user }!');
// const compiled = template('<% print("hello " + user); %>!');
const compiled = template('<b><%- user %></b>');
const mockData = compiled({ 'user': 'fred' });

function Lodash() {
  return (
    <ul>
      {mockData}
    </ul>
  );
}

export default Lodash;
