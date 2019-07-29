import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from '../Emoji';

const ComboEmojis = styled.div`
  display: inline-block;
`

const generateLessEmojis = (iconSize, rating) => {
  return Array.apply(null, new Array(rating))
    .map((item,index)=>{
      return <Emoji key={`EMOJI-${rating}-${index}`} icon={rating} size={iconSize} />
    });
};

const generateMoreEmojis = (iconSize, rating) => {
  return (
    <ComboEmojis>
      <Emoji icon={rating} size={iconSize} />
      {/*<img src={require("./assets/x.svg")}/>*/}
      <img src="./assets/images/x.svg" />
      {rating}
    </ComboEmojis>
  );
};

const SmallEmojiRating = ({rating, iconSize}) => {
  return rating === 0
    ? <Emoji icon={0} />
    : rating <=3 ? generateLessEmojis(iconSize, rating) : generateMoreEmojis(iconSize, rating);
};

SmallEmojiRating.propTypes = {
  iconSize: PropTypes.number,
  rating: PropTypes.number
};
SmallEmojiRating.defaultProps = {
  rating: 6
}


export default SmallEmojiRating;
