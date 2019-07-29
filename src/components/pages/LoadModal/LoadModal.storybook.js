import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadModal from './LoadModal';


storiesOf('pages/LoadModal', module)
  .add('default', () => (
    <LoadModal />
  ));
