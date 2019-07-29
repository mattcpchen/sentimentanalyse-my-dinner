import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaceIcon, Dialogue } from '../../atoms/';


const StyledReviewCard = styled.div`
  display: flex;
  margin: 0 auto;
`

const StyledFaceIcon = styled(FaceIcon)`
  margin: 15px 15px 0 0;
`

const ReviewCard = ({className, review, reviewRating, handleTFRatings}) => {
  return(
    <StyledReviewCard className={className}>
      <StyledFaceIcon />
      <Dialogue
        content={review}
        footerRating={reviewRating}
        handleTFRatings={handleTFRatings}
      />
    </StyledReviewCard>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  review: PropTypes.string,
  reviewRating: PropTypes.number,
  handleTFRatings: PropTypes.func
};

ReviewCard.defaultProps = {
  review: 'This is the review'
};

export default ReviewCard;
