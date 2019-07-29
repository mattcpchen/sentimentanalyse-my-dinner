import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import RestCard from './RestCard';

const Container = styled.div`
  background-color: #eee;
  padding: 30px;
  max-width: 800px;
  margin-left:100px;
`

const StyledRestCard = styled(RestCard)`
  margin-bottom: 30px;
`

storiesOf('molecules/RestCard', module)
  .add('default', () => (
    <Container>
      <StyledRestCard />
    </Container>
  ))
