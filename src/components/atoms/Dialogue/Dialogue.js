import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { ThemeColors } from '../../../helpers/ThemeSettings'
import EmojiRating from '../EmojiRating';
import ReviewRatingButton from '../ReviewRatingButton';

const Tooltip=styled.div`
    position: relative;
    width: 100%;
    background-color: white;
    border-radius: ${props => props.radiusSize+'px'};
    margin: 0 auto;
    border: 1px solid;
    border-color: ${props => props.outlineColor};
    &:before {
      content:"";
      position: absolute;
      border-top: ${props => props.arrowSize+'px solid transparent'};
      border-bottom: ${props => props.arrowSize+'px solid transparent'};
      border-right: ${props => props.arrowSize+'px solid '+props.outlineColor};
      top: 15px;
      left: ${props => '-'+props.arrowSize+'px'};
    }
    &:after {
      content:"";
      position: absolute;
      border-top: ${props => props.arrowSize+'px solid transparent'};
      border-bottom: ${props => props.arrowSize+'px solid transparent'};
      border-right: ${props => props.arrowSize+'px solid '+props.contentColor};
      top: 15px;
      left: ${props => '-'+(props.arrowSize-2)+'px'};
    }
`
const TooltipContent=styled.div`
    border-bottom: 1px solid;
    border-radius: 10px 10px 0 0;
    border-radius: ${props => props.radiusSize+'px '+props.radiusSize+'px 0 0'};
    background-color: ${props => props.contentColor};
    border-bottom-color: ${props => props.outlineColor};
    padding: 5px 10px;
    min-height: 40px
`
const TooltipFooter=styled.div`
    padding: 5px 10px;
    border-radius: ${props => '0 0 '+props.radiusSize+'px '+props.radiusSize+'px'};
    background-color: ${props => props.footerColor};
`

const Dialogue = (props) => {
  const { content, footerRating, handleTFRatings } = props;

  const generateReviewRating = () => {
    return footerRating === -100
      ? null
      : footerRating === -1
        ? <ReviewRatingButton handleTFRatings={handleTFRatings} />
        : <EmojiRating rating={footerRating} />
  }

  return (
    <Tooltip {...props}>
      <TooltipContent {...props}>
        {content}
      </TooltipContent>
      <TooltipFooter {...props}>
        { generateReviewRating() }
      </TooltipFooter>
    </Tooltip>
  )
};

Dialogue.propTypes = {
  arrowSize: PropTypes.number,
  radiusSize: PropTypes.number,
  contentColor: PropTypes.string,
  footerColor: PropTypes.string,
  outlineColor: PropTypes.string,
  content: PropTypes.string,
  footerRating: PropTypes.number,
  handleTFRatings: PropTypes.func
};
Dialogue.defaultProps = {
  content: 'This is the Content',
  arrowSize: 10,
  radiusSize: 10,
  contentColor: ThemeColors.lightGray,
  footerColor: ThemeColors.white,
  outlineColor: ThemeColors.borderGray
}


export default Dialogue;
