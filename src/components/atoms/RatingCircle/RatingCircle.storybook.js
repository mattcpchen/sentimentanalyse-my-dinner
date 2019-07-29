import React from 'react';
import { storiesOf } from '@storybook/react';
import RatingCircle from './RatingCircle';


storiesOf('atoms/RatingCircle', module)
.add('default', () => (
  <RatingCircle />
));
