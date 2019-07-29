import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './Dropdown';


const mockCall = () => {
  console.log('test');
};

storiesOf('atoms/Dropdown', module)
  .add('default', () => (
    <Dropdown onHandleChange={mockCall} />
  ));
