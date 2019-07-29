import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DescItem, EmojiRating, LinkButton, ReviewRatingButton } from '../../atoms/';
import {closeLoadModal, openLoadModal, openReviewModal} from '../../../actions/modalAction';
import { ThemeColors } from '../../../helpers/ThemeSettings';
import { tfHandleRatings } from '../../../helpers/tfServiceHandler';
import { applyTFRatings } from '../../../actions/restaurants';

const StyledLinkButton = styled(LinkButton)`
  padding: 0;
  color: ${ThemeColors.orange};
`

let RestCardDescs = (props) => {
  const {
    restaurants,
    rest_id,
    rest_name,
    average_cost_for_two,
    all_reviews,
    all_reviews_count,
    all_reviews_ratings,
    all_reviews_rating,
    cuisines,
    menu_url,
    phone_numbers,
    price_range,
    user_rating_average,
    user_rating_votes,
    is_favored,
    handleToggleFavor
  } = props;

  const handleOpenModal = () => {
    props.dispatch(openReviewModal(
      rest_id, rest_name,
      all_reviews, all_reviews_ratings,
      user_rating_average, user_rating_votes
    ));
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

  const generateReviewRating = () => {
    return all_reviews_rating === -100
      ? <span>N/A</span>
      : all_reviews_rating === -1
        ? <ReviewRatingButton handleTFRatings={handleTFRatings} />
        : <EmojiRating rating={all_reviews_rating} iconSize={18} />
  }

  const generateReviewLink = () => {
    if (all_reviews_count > 0) {
      return (
        <StyledLinkButton handleClick={handleOpenModal}>
          {all_reviews_count} {all_reviews_count>1? `Reviews` : `Review`}
        </StyledLinkButton>
      )
    } else {
      return `${all_reviews_count} Review`;
    }
  };

  const generateFavorLink = () => {
    return (
      <StyledLinkButton handleClick={handleToggleFavor}>
        {is_favored ? `Remove from your favor list` : `Bookmark this restaurant`}
      </StyledLinkButton>
    )
  };

  return (
    <div>
      <DescItem title='Name' content={rest_name} />
      <DescItem title='Cuisines' content={cuisines} />
      <DescItem title='Cost for 2' content={average_cost_for_two} />
      <DescItem title='Price Range' content={price_range} />
      <DescItem title='Guest Rating'
                content={
                  user_rating_average === -100 ? 'N/A' : user_rating_average
                } />
      <DescItem title='Review Rating'
                content={
                  <span style={{display:'flex', paddingTop:'3px'}}>
                  { generateReviewRating() }
                  </span>
                } />
      <DescItem title='Reviews' content={ generateReviewLink() } />
      <DescItem title='Favor' content={ generateFavorLink() } />
    </div>
  )
};

RestCardDescs.propTypes = {
  rest_id: PropTypes.string,
  rest_name: PropTypes.string,
  average_cost_for_two: PropTypes.string,
  all_reviews: PropTypes.array,
  all_reviews_ratings: PropTypes.array,
  all_reviews_count: PropTypes.number,
  all_reviews_rating: PropTypes.number,
  cuisines: PropTypes.string,
  menu_url: PropTypes.string,
  phone_numbers: PropTypes.string,
  price_range: PropTypes.number,
  user_rating_average: PropTypes.number,
  user_rating_votes: PropTypes.number,
  is_favored: PropTypes.bool,
  handleToggleFavor: PropTypes.func
};
RestCardDescs.defaultProps = {};


RestCardDescs = connect(
  null,
  dispatch => ({dispatch})
)(RestCardDescs);

export default RestCardDescs;
