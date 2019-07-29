import {sortRestaurantsBy} from '../helpers/reducerHelpers';


export const restaurantsReducer = (state=[], action) => {
  switch(action.type) {

    case 'UPDATE_RESTAURANT':
      return sortRestaurantsBy(action.restaurants, action.sortby);

    case 'ADD_FAVOR_RESTAURANT':
      const addFavRests = action.restaurants.map(res => {
        return (res.rest_id === action.rest_id)
          ? { ...res, is_favored: true }
          : res;
      });
      return sortRestaurantsBy(addFavRests, action.sortby);

    case 'REMOVE_FAVOR_RESTAURANT':
      const removeFavRests = action.restaurants.map(res => {
        return (res.rest_id === action.rest_id)
          ? { ...res, is_favored: false }
          : res;
      });
      return sortRestaurantsBy(removeFavRests, action.sortby);

    case 'APPLY_TF_REVIEW_RATINGS':
      return action.restaurants.map(res => {
        return (res.rest_id === action.rest_id)
          ? {
            ...res,
            all_reviews_ratings: action.all_reviews_ratings,
            all_reviews_rating: action.all_reviews_rating,
            final_rating: action.final_rating
            }
          : res;
      });

    default:
      return state;
  }
};

