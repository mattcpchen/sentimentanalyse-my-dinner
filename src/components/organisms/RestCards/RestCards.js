import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { RestCard } from '../../molecules/';

const BaseHolder = styled.div``;

const StyledRestCard = styled(RestCard)`
  margin-bottom: 30px;
`

let RestCards = ({ className, restaurants }) => (
  <BaseHolder className={className}>{
    restaurants.map((resData, index) => (
      <StyledRestCard
        key={`RestCard-${index}`}
        index={index}
        {...resData}
      />
    ))
  }</BaseHolder>
);

RestCards.propTypes = {
  className: PropTypes.string,
  restaurants: PropTypes.array
};

RestCards = connect(
  (state) => ({
    restaurants: state.restaurants
  })
)(RestCards);

export default React.memo(
  RestCards,
  (prevProps, nextProps)=>{
    return prevProps.restaurants === nextProps.restaurants;
  });
