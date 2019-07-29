import React from 'react';
import { storiesOf } from '@storybook/react';
import ReviewModal from './ReviewModal';

const modalClose = () => {
  alert('click to close')
}

storiesOf('pages/ReviewModal', module)
  .add('default', () => (
    <ReviewModal
      show={true}
      onHide={modalClose}
    />
  ))
