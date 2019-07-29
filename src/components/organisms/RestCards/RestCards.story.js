import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import RestCards from './RestCards'

const Container = styled.div`
  background-color: #eee;
  padding: 30px;
  max-width: 800px;
  margin-left:100px;
`


storiesOf('organisms/RestCards', module)
  .add('default', () => (
    <Container>
      <RestCards />
    </Container>
  ))
