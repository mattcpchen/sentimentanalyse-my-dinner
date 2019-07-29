import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Emoji from './Emoji'

const IconHolder = styled.div`
  display: flex;
  align-items: center;
`

storiesOf('atoms/Emoji', module)
  .add('All Emojis', () => (
    <>
      <IconHolder>0.0 >> <Emoji rating={0} /></IconHolder>
      <IconHolder>0.5 >> <Emoji rating={0.5} /></IconHolder>
      <IconHolder>1.0 >> <Emoji rating={1} isHalf={true} /></IconHolder>
      <IconHolder>1.5 >> <Emoji rating={1.5} /></IconHolder>
      <IconHolder>2.0 >> <Emoji rating={2} /></IconHolder>
      <IconHolder>2.5 >> <Emoji rating={2.5} /></IconHolder>
      <IconHolder>3.0 >> <Emoji rating={3} /></IconHolder>
      <IconHolder>3.5 >> <Emoji rating={3.5} /></IconHolder>
      <IconHolder>4.0 >> <Emoji rating={4} /></IconHolder>
      <IconHolder>4.5 >> <Emoji rating={4.5} /></IconHolder>
      <IconHolder>5.0 >> <Emoji rating={5} /></IconHolder>
    </>
  ));
