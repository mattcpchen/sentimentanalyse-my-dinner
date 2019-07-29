import React from 'react';
import { storiesOf } from '@storybook/react';
import EmojiRating from './EmojiRating';

storiesOf('atoms/EmojiRating', module)
.add('All EmojiRatings', () => (
  <>{
    [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
    .map(rating => (
      <div>
        <EmojiRating rating={rating} />
      </div>
    ))
  }</>
));
