import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';

storiesOf('Button', module)
  .add('basic', () => (
      <Button>555</Button>
    // <Switch onChange={action('onChange')} />
  ));
//   .add('checked', () => (
//     <Switch checked onChange={action('onChange')} />
//   ));


// https://storybook.js.org/docs/react/writing-docs/doc-blocks