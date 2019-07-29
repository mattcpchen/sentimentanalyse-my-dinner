import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import ReviewCards from './ReviewCards'

const Container = styled.div`
  background-color: #eee;
  padding: 30px;
  max-width: 800px;
  margin-left:100px;
`


storiesOf('organisms/ReviewCards', module)
.add('default', () => (
  <Container>
    <ReviewCards />
  </Container>
))
