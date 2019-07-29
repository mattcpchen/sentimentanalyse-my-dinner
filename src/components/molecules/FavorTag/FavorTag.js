import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PickFlag from '../../atoms/PickFlag';
import RatingCircle from "../../atoms/RatingCircle";
import { ThemeColors } from '../../../helpers/ThemeSettings';


const StyledFavorTag = styled.div`
  background-color: #999;
  height: 50px;
  color: white;
  text-shadow: 0 0 5px #333;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
  border-radius: 10px 10px 0 0;
`
const StyledTitle=styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    max-width: 200px;
  }
  @media screen and (max-width: 400px),
         only screen and (max-device-width: 400px){
    display: none;
  }
`

const StyledPickFlag = styled(PickFlag)`
  top: 10px;
  position: absolute;
`
const StyledRatingCircle = styled(RatingCircle)`
  position: absolute;
  top: 9px;
  right: 15px;
`

const FavorTag = ({title, rating, is_your_favor, is_our_pick}) => {
    let flagText, flagTextColor, flagBgColor;
    if (is_your_favor && is_our_pick) {
        flagText = 'BEST CHOICE';
        flagTextColor = ThemeColors.white;
        flagBgColor = ThemeColors.orange;
    } else if (is_your_favor) {
        flagText = 'YOUR FAVOR';
        flagTextColor = ThemeColors.white;
        flagBgColor = ThemeColors.darkGray;
    } else if (is_our_pick) {
        flagText = 'OUR PICK';
        flagTextColor = ThemeColors.white;
        flagBgColor = ThemeColors.darkGray;
    }
  return (
    <>
      <StyledFavorTag>
          <StyledTitle>{title}</StyledTitle>
      </StyledFavorTag>
      <StyledPickFlag text={flagText} textColor={flagTextColor} bgColor={flagBgColor} width='120px' />
      {rating !== -100 &&
        <StyledRatingCircle rating={rating} />
      }
    </>
  )
}

FavorTag.propTypes = {
  title: PropTypes.string
};
FavorTag.defaultProps = {
  title: 'My Favor'
};


export default FavorTag;
