import React from 'react'
import { storiesOf } from '@storybook/react'
import LinkButton from './LinkButton'


storiesOf('atoms/LinkButton', module)
  .add('default', () => (
    <LinkButton />
  ));
