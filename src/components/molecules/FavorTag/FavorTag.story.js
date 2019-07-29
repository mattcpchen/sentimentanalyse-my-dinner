import React from 'react';
import { storiesOf } from '@storybook/react';
import FavorTag from './FavorTag';


storiesOf('molecules/FavorTag', module)
.add('default', () => (
  <FavorTag />
));
