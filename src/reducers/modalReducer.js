
export const modalStateReducer = (
  state={restId:null, restName:null, reviews:[], reviewRatings:[], userRating:0, userRatingVotes:0},
  action
) => {
  switch(action.type) {
    case 'OPEN_REVIEW_MODAL':
      return {
        restId: action.rest_id,
        restName: action.rest_name,
        reviews: action.all_reviews,
        reviewRatings: action.all_reviews_ratings,
        userRating: action.user_rating_average,
        userRatingVotes: action.user_rating_votes
      };
    case 'CLOSE_REVIEW_MODAL':
      return {
        restId: '',
        restName: '',
        reviews: [],
        reviewRatings: [],
        userRating: 0,
        userRatingVotes: 0
      };
    default:
      return state;
  }
};


export const loadStateReducer = (state=false, action) => {
  switch(action.type) {
    case 'OPEN_LOAD_MODAL':
      return true;
    case 'CLOSE_LOAD_MODAL':
      return false;
    default:
      return state;
  }
};
