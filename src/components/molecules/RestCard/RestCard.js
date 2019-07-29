import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components'
import FavorTag from '../FavorTag';
import { RestCardImage, RestCardDescs, RestCardReview } from '../../molecules/';
import { ThemeColors } from '../../../helpers/ThemeSettings';
import { addToMyFavCookie, removeFromMyFavCookie } from '../../../helpers/storageHandlers';
import { addFavorRestaurant, removeFavorRestaurant } from '../../../actions/restaurants';

const CardContainer = styled.div`
  min-width: 320px;
  border: 1px solid #999;
  border-radius: 10px;
  position: relative;
  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  -moz-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  -ms-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
`
const AllContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.isFavored? '0 0 10px 10px' : '10px'};
  
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    flex-direction: column;
    align-items: center;
  }
`
const LeftContent=styled.div`
  width: 185px;
  min-width: 185px;
  padding: 20px 0 15px 25px;
  float: left;
`
const MiddleContent=styled.div`
  width: 280px;
  min-width: 280px;
  padding: 20px 15px 15px 20px;
  float: left;
  
  @media screen and (max-width: 800px),
         only screen and (max-device-width: 800px){
    float: none;
    text-align: center;
    width: 500px;
  }
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    width: 280px;
  }
`
const RightContent=styled.div`
  margin: 20px 25px 15px 0;
  padding-left: 15px;
  border-left: 1px dashed #333;
  float: left;
  
  @media screen and (max-width: 800px),
         only screen and (max-device-width: 800px){
    display: none;
  }
`

let RestCard = (props) => {
  const bgColor = ThemeColors.white;
  const {
    index,
    rest_id,
    cuisines,
    restaurants,
    sortby,
    rest_name,
    is_favored,
    final_rating,
    featured_image,
    photo_count,
    photos_url,
    all_reviews,
    all_reviews_rating,
    all_reviews_ratings,
    all_reviews_count,
    user_rating_average,
    user_rating_votes
  } = props;

  const toggleFavor = () => {
    if(is_favored) {
      removeFromMyFavCookie( rest_id.toString() );
      props.dispatch( removeFavorRestaurant(restaurants, rest_id, sortby) );
    } else {
      addToMyFavCookie( rest_id );
      props.dispatch( addFavorRestaurant(restaurants, rest_id, sortby) );
    }
  };

  const is_favor_tagged = is_favored || final_rating===5;
  return(
    <CardContainer className={props.className}>
      { is_favor_tagged &&
        <FavorTag
          title={rest_name}
          rating={final_rating}
          is_your_favor={ is_favored }
          is_our_pick={ final_rating===5 }
        />
      }
      <AllContent isFavored={is_favored} bgColor={bgColor}>
        <LeftContent>
          <RestCardImage
            index={index}
            is_favor_tagged={is_favor_tagged}
            final_rating={final_rating}
            featured_image={featured_image}
            photo_count={photo_count}
            photos_url={photos_url}
          /></LeftContent>
        <MiddleContent>
          <RestCardDescs
            {...props}
            handleToggleFavor={toggleFavor}
          /></MiddleContent>
        <RightContent>
          <RestCardReview
            restaurants={restaurants}
            rest_id={rest_id}
            rest_name={rest_name}
            all_reviews_count={all_reviews_count}
            all_reviews_ratings={all_reviews_ratings}
            all_reviews={all_reviews}
            user_rating_average={user_rating_average}
            user_rating_votes={user_rating_votes}
            handleToggleFavor={toggleFavor}
          /></RightContent>
      </AllContent>
    </CardContainer>
  );
};

RestCard.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  featured_image: PropTypes.string
};

RestCard.defaultProps = {
  index: 0,
  all_reviews: [],
  final_rating: 3
};

RestCard = connect(
  state => ({
    sortby: state.sortby,
    restaurants: state.restaurants
  }),
  dispatch => ({dispatch})
)(RestCard);

export default React.memo(
  RestCard, (prevProps, nextProps) => {
    const isSameRes = prevProps.rest_id === nextProps.rest_id;
    const isSameFavored = prevProps.is_favored === nextProps.is_favored;
    const isSameReviewRating = prevProps.all_reviews_rating === nextProps.all_reviews_rating;
    return isSameRes && isSameFavored && isSameReviewRating;
  });
