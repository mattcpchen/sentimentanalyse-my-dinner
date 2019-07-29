import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ReviewCard } from '../../molecules/';
import {closeLoadModal, openLoadModal, openReviewModal} from '../../../actions/modalAction';
import {tfHandleRatings} from '../../../helpers/tfServiceHandler';
import { applyTFRatings } from '../../../actions/restaurants';


const CardHeader = styled.div`
  position: relative;
  background-color: white;
  height: auto;
  padding: 20px 40px 20px 20px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #0333;
`

const CardBody=styled.div`
  position: relative;
  background-color: white;
  height: 400px;
  overflow-y: scroll;
  padding: 20px 45px 40px 40px;
  border-radius: 0 0 15px 15px;
  border-bottom: 20px solid white;
`
const CloseImage=styled.img`
  position: absolute;
  right: 20px;
  cursor: pointer;
`

const StyledReviewCard = styled(ReviewCard)`
  margin-top:20px;
`

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    restId: state.reviewModal.restId,
    restName: state.reviewModal.restName,
    reviews: state.reviewModal.reviews,
    reviewRatings: state.reviewModal.reviewRatings,
    userRating: state.reviewModal.userRating,
    userRatingVotes: state.reviewModal.userRatingVotes
  }
};

let ReviewCards = (props) => {
  const {
    restaurants,
    restId,
    restName,
    reviews,
    reviewRatings,
    userRating,
    userRatingVotes,
    handleCloseModal
  } = props;

  const handleTFRatings = () => {
    props.dispatch( openLoadModal() );
    tfHandleRatings({
      rest_id: restId,
      all_reviews: reviews,
      all_reviews_ratings: reviewRatings,
      user_rating_average: userRating,
      user_rating_votes: userRatingVotes
    }, (data)=>{

      props.dispatch( applyTFRatings(
        restaurants,
        restId,
        data.finalRating,
        data.allReviewsRating,
        data.allReviewsRatings
      ));

      props.dispatch( openReviewModal(
        restId,
        restName,
        reviews,
        data.allReviewsRatings,
        userRating,
        userRatingVotes
      ));

      props.dispatch( closeLoadModal() );
    });
  }

  return (
    <>
      <CardHeader>
        <CloseImage
          src="./assets/images/x.svg"
          onClick={handleCloseModal}
        />
        {restName}
      </CardHeader>
      <CardBody>{
        reviews.map((review,index) => (
          <StyledReviewCard
            key={`ReviewCard-${restId}-${index}`}
            review={review}
            reviewRating={reviewRatings[index]}
            handleTFRatings={handleTFRatings}
          />
        ))
      }</CardBody>
    </>
  )
};






ReviewCards.propTypes = {
  handleCloseModal: PropTypes.func
};

ReviewCards.defaultProps = {
};

ReviewCards = connect(
  mapStateToProps,
  dispatch => ({dispatch})
)(ReviewCards);

export default ReviewCards;
