import React from 'react';
import { storiesOf } from '@storybook/react';
import ReviewRatingButton from './ReviewRatingButton';


storiesOf('atoms/ReviewRatingButton', module)
  .add('default', () => (
    <ReviewRatingButton />
  ));
