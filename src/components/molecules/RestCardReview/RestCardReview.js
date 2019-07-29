import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LinkButton } from '../../atoms/';
import ReviewCard from '../ReviewCard';
import { closeLoadModal, openLoadModal, openReviewModal }  from '../../../actions/modalAction';
import { ThemeColors } from '../../../helpers/ThemeSettings';
import { tfHandleRatings } from '../../../helpers/tfServiceHandler';
import { applyTFRatings } from '../../../actions/restaurants';

const BaseHolder = styled.div``;

const StyledReviewCard = styled(ReviewCard)``;

const StyledLinkButton = styled(LinkButton)`
  font-size: 12px;
  color: ${ThemeColors.text};
  padding: 0;
  margin-top: 4px;
  margin-right: 3px;
  font-weight: 600;
  float: right;
`;

const truncatReviewText = (string) => {
  if(string.length > 200) {
    return `${string.substring(0, 200)}......`
  } else {
    return string;
  }
}

let RestCardReview = (props) => {
  const {
    restaurants,
    rest_id, rest_name,
    all_reviews,
    all_reviews_ratings,
    all_reviews_count,
    user_rating_average,
    user_rating_votes
  } = props;

  const handleOpenModal = () => {
    props.dispatch( openReviewModal(
      rest_id, rest_name,
      all_reviews, all_reviews_ratings,
      user_rating_average, user_rating_votes
    ) );
  };

  const handleTFRatings = () => {
    props.dispatch( openLoadModal() );
    tfHandleRatings({
      rest_id,
      all_reviews,
      all_reviews_ratings,
      user_rating_average,
      user_rating_votes
    }, (data)=>{

      props.dispatch( applyTFRatings(
        restaurants,
        rest_id,
        data.finalRating,
        data.allReviewsRating,
        data.allReviewsRatings
      ));
      props.dispatch( closeLoadModal() );
    });
  }

  const generateReviewLink = () => {
    if(all_reviews_count > 0) {
      return (
        <StyledLinkButton handleClick={handleOpenModal}>
          See all {all_reviews_count} {all_reviews_count>1? `Reviews` : `Review`} >
        </StyledLinkButton>
      );
    } else {
      return null;
    }
  };

  let randomReview, randomReviewRating;
  if(all_reviews_count > 0) {
    const randIndex = Math.floor(Math.random()*all_reviews.length);
    randomReview = truncatReviewText(all_reviews[randIndex]);
    randomReviewRating = all_reviews_ratings[randIndex];
  } else {
    randomReview = 'N/A ......';
    randomReviewRating = -100;
  }

  return (
    <BaseHolder className={props.className}>
      <StyledReviewCard
        style={{maxWidth: '320px'}}
        review={randomReview}
        reviewRating={randomReviewRating}
        handleTFRatings={handleTFRatings}
      />
      { generateReviewLink() }
    </BaseHolder>
  )
}

RestCardReview.propTypes = {
  className: PropTypes.string,
  rest_id: PropTypes.string,
  rest_name: PropTypes.string,
  all_reviews: PropTypes.array,
  all_reviews_ratings: PropTypes.array,
  all_reviews_count: PropTypes.number
};
RestCardReview.defaultProps = {};

RestCardReview = connect(
  null,
  dispatch => ({dispatch})
)(RestCardReview);

export default React.memo(
  RestCardReview, (prevProps, nextProps) => {
    const isSameRes = prevProps.rest_id === nextProps.rest_id;
    const isSameReviews = prevProps.all_reviews_ratings === nextProps.all_reviews_ratings;
    return isSameRes && isSameReviews;
  });
