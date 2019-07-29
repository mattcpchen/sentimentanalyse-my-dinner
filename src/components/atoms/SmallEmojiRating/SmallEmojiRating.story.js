import React from 'react'
import { storiesOf } from '@storybook/react'
import SmallEmojiRating from './SmallEmojiRating'


storiesOf('atoms/SmallEmojiRating', module)
  .add('All Ratings', () => (
    <>{
      [0,1,2,3,4,5,6,7,8,9,10]
      .map((rating, index) => (
        <div key={'SmallEmojiRating-'+index}>
          <SmallEmojiRating rating={rating} />
        </div>
      ))
    }</>
  ));
