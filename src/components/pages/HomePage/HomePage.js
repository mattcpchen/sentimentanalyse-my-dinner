import React from 'react';
import styled from 'styled-components';
import { SearchHeader, RestCards } from '../../organisms/';


const StyledSearchHeader = styled(SearchHeader)`
  margin-bottom: 20px;
  z-index: 100;
`

const StyledRestCards = styled(RestCards)`
  padding: 0 80px;
  
  @media screen and (max-width: 1000px),
         only screen and (max-device-width: 1000px){
    padding: 0px;
  }
`

const HomePage = () => (
  <>
    <StyledSearchHeader />
    <StyledRestCards />
  </>
);
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
