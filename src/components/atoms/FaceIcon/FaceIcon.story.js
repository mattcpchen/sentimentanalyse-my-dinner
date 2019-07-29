import React from 'react'
import { storiesOf } from '@storybook/react'
import FaceIcon from './FaceIcon'


storiesOf('atoms/FaceIcon', module)
  .add('all FaceIcons', () => (
    <>
      <FaceIcon icon={1} />
      <FaceIcon icon={2} />
      <FaceIcon icon={3} />
      <FaceIcon icon={4} />
      <FaceIcon icon={5} />
    </>
  ));
