import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';

const Container = styled.div`
  background-color: #eee;
  padding: 30px;
  max-width: 800px;
  margin-left:100px;
`

const StyledReviewCard = styled(ReviewCard)`
  margin-bottom: 10px;
`

storiesOf('molecules/ReviewCard', module)
.add('default', () => (
  <Container>
    <StyledReviewCard />
  </Container>
))
