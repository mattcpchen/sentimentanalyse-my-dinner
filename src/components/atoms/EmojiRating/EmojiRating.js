import React from 'react'
import PropTypes from 'prop-types'
import Emoji from '../Emoji';


const generateEmojiRating = (rating, iconSize) => {
  const ceilRating = Math.ceil(rating);
  const floorRating = Math.floor(rating);
  const hasHalf = ceilRating===floorRating? false : true;
  return Array.apply(null, new Array(ceilRating))
  .map((item, index)=> {
    return hasHalf && index===ceilRating-1
      ? <Emoji key={`EMOJI-${rating*2}-${index}`} isHalf={true} rating={rating} size={iconSize} />
      : <Emoji key={`EMOJI-${rating*2}-${index}`} rating={rating} size={iconSize}/>
  })
};

const EmojiRating = ({iconSize, rating}) => {
  return rating === 0
    ? <Emoji icon={0} size={iconSize} />
    : generateEmojiRating(rating, iconSize)
}

EmojiRating.propTypes = {
  rating: PropTypes.number,
  iconSize: PropTypes.number
};
EmojiRating.defaultProps = {
  rating: 5
}


export default EmojiRating;
