import React from 'react';
import { storiesOf } from '@storybook/react';
import DescItem from './DescItem';


storiesOf('atoms/DescItem', module)
.add('default', () => (
  <DescItem />
));
