import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Dialogue from './Dialogue'

const Box100 = styled.div`
  width: 100%;
`
const Box80 = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`

storiesOf('atoms/Dialogue', module)
  .add('with default Box', () => (
    <Box100>
      <Dialogue />
    </Box100>
  ))
  .add('with 80% Box', () => (
    <Box80>
      <Dialogue />
    </Box80>
  ));
