import React from 'react';
import { storiesOf } from '@storybook/react';
import RatingFlag from './RatingFlag';


storiesOf('atoms/RatingFlag', module)
.add('default', () => (
  <RatingFlag />
));
