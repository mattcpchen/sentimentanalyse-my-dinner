
export const openReviewModal = (rest_id, rest_name, all_reviews, all_reviews_ratings, user_rating_average, user_rating_votes) => {
  return {
    type: 'OPEN_REVIEW_MODAL',
    rest_id: rest_id,
    rest_name: rest_name,
    all_reviews: all_reviews,
    all_reviews_ratings: all_reviews_ratings,
    user_rating_average: user_rating_average,
    user_rating_votes: user_rating_votes
  }
};

export const closeReviewModal = () => {
  return {
    type: 'CLOSE_REVIEW_MODAL',
    rest_id: '',
    rest_name: '',
    all_reviews: [],
    all_reviews_ratings: [],
    user_rating_average: 0,
    user_rating_votes: 0
  }
};

export const openLoadModal = () => {
  return {
    type: 'OPEN_LOAD_MODAL'
  }
};

export const closeLoadModal = () => {
  return {
    type: 'CLOSE_LOAD_MODAL'
  }
};
