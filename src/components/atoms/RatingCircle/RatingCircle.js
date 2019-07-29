import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeColors } from '../../../helpers/ThemeSettings';


const StyledCircle = styled.div`
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: ${props => '0 0 10px 5px '+props.glowing};
    -moz-box-shadow: ${props => '0 0 10px 5px '+props.glowing};
    -ms-box-shadow: ${props => '0 0 10px 5px '+props.glowing};
    box-shadow: ${props => '0 0 10px 5px '+props.glowing};
    width: ${props => props.size+'px'};
    height: ${props => props.size+'px'};
    background: #333;
    font-size: 20px;
    color: #fff;
    font-weight: 900;
    line-height: ${props => props.size+'px'};
    text-align: center;
    cursor: pointer;
`

const RatingCircle = ({className, rating, size}) => (
  <StyledCircle
    className={className}
    size={size}
    glowing={ThemeColors.orange}
  >
    {rating}
  </StyledCircle>
);

RatingCircle.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
  size: PropTypes.number
};
RatingCircle.defaultProps = {
  rating: 3,
  size: 32
}


export default RatingCircle;
