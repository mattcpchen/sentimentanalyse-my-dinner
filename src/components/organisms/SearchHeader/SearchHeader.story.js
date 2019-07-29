import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import SearchHeader from './SearchHeader'

const Container = styled.div`
  background-color: #eee;
  padding: 30px;
  max-width: 800px;
  margin-left:100px;
`

storiesOf('organisms/SearchHeader', module)
  .add('default', () => (
    <Container>
      <SearchHeader />
    </Container>
  ))
