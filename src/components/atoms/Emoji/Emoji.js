import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const EmojiHolder = styled.div`
  position:relative;
  display: inline-block;
  background-size: cover;
  opacity: ${props => props.rating===0? 0.2: 1};
  width: ${props => props.size+'px'}
  height: ${props => props.size+'px'}
`

const StyledOneEmoji = styled.div`
  position:absolute;
  opacity: ${props => props.isHalf? 0.2: 1};
  background-image: ${props => 'url("'+props.src+'")'};
  background-repeat: no-repeat;
  background-size: cover;
  width: ${props => props.size+'px'}
  height: ${props => props.size+'px'}
`

const StyledHalfEmoji = styled.div`
  position:absolute;
  background-image: ${props => 'url("'+props.src+'")'};
  background-repeat: no-repeat;
  background-size: cover;
  width: ${props => (props.size/2)+'px'}
  height: ${props => props.size+'px'}
`

const WholeEmoji = ({icon, size, isHalf}) => (
  <StyledOneEmoji
    icon={icon}
    isHalf={isHalf}
    // src={require('./assets/icon_'+icon+'.png')}
    src={'./assets/emojis/icon_'+icon+'.png'}
    size={size}
  />
);
const HalfEmoji = ({icon, size, isHalf}) => (
  <StyledHalfEmoji
    icon={icon}
    isHalf={isHalf}
    // src={require('./assets/icon_'+icon+'.png')}
    src={'./assets/emojis/icon_'+icon+'.png'}
    size={size}
  />
);



const Emoji = (props) => (
  <EmojiHolder
    rating={props.rating}
    className={props.className}
    size={props.size}
  >
    <WholeEmoji icon={props.rating*2} {...props} />
    <HalfEmoji icon={props.rating*2} {...props} />
  </EmojiHolder>
);

Emoji.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.number,
  isHalf: PropTypes.bool
};
Emoji.defaultProps = {
  rating: 0,
  size: 22,
  isHalf: false
}


export default Emoji;
