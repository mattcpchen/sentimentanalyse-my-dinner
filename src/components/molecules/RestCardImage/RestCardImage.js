import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RatingFlag, LinkButton } from '../../atoms/';
import { allNoImages } from '../../../helpers/data';
import { ThemeColors } from '../../../helpers/ThemeSettings';

const StyledImage = styled.img`
  width: 165px;
  height: auto;
  border: 1px solid #aaa;
  box-shadow: 0 0 10px 1px #aaa;
`
const StyledLinkButton = styled(LinkButton)`
  font-size: 12px;
  color: ${ThemeColors.text};
  padding: 0;
  font-weight: 600;
`

const StyledRatingFlag = styled(RatingFlag)`
  top: 25px;
  position: absolute;
`

const handleOpenPhotos = (url) => {
  window.open(url, '_blank');
};

const RestCardImage = ({
  index,
  is_favor_tagged, final_rating,
  featured_image,
  photo_count, photos_url
}) => {
  const noImage = allNoImages[index % allNoImages.length];
  return (
    <>
      <StyledImage src={featured_image || noImage} />
      {!is_favor_tagged && final_rating !==-100 &&
      <StyledRatingFlag
        text={final_rating.toString()}
        width='40px'
      />}
      {
        photo_count > 0 &&
        <StyledLinkButton handleClick={()=>handleOpenPhotos(photos_url)}>
          See all {photo_count} {photo_count>1? `Photos` : `Photo`} >
        </StyledLinkButton>
      }
    </>
  )
};

RestCardImage.propTypes = {
  index: PropTypes.number,
  is_favor_tagged: PropTypes.bool,
  final_rating: PropTypes.number,
  featured_image: PropTypes.string,
  photo_count: PropTypes.number,
  photos_url: PropTypes.string
};
RestCardImage.defaultProps = {
  index: 0
};

export default React.memo(
  RestCardImage, (prevProps, nextProps) => {
    const isSameRest = prevProps.rest_id === nextProps.rest_id;
    const isSameFavTagged = prevProps.is_favor_tagged === nextProps.is_favor_tagged;
    const isSameFinalRating = prevProps.final_rating === nextProps.final_rating;
    return isSameRest && isSameFavTagged && isSameFinalRating;
  });
