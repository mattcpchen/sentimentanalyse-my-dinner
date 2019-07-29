

export const updateRestaurants = (restaurants, sortby) => {
  return {
    type: 'UPDATE_RESTAURANT',
    restaurants: restaurants,
    sortby: sortby
  }
}

export const addFavorRestaurant = (restaurants, rest_id, sortby) => {
  return {
    type: 'ADD_FAVOR_RESTAURANT',
    restaurants: restaurants,
    rest_id: rest_id,
    sortby: sortby
  }
};

export const removeFavorRestaurant = (restaurants, rest_id, sortby) => {
  return {
    type: 'REMOVE_FAVOR_RESTAURANT',
    restaurants: restaurants,
    rest_id: rest_id,
    sortby: sortby
  }
};

export const applyTFRatings = (
  restaurants,
  rest_id,
  final_rating,
  all_reviews_rating,
  all_reviews_ratings
) => {
  return {
    type: 'APPLY_TF_REVIEW_RATINGS',
    restaurants,
    rest_id,
    final_rating,
    all_reviews_rating,
    all_reviews_ratings
  }
};
