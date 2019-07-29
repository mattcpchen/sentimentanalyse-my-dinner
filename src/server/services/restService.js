
const flattenAllReviewRatings = ({reviews}) => {
  const allReviews=[], allReviewsRatings = [];
  reviews.forEach(({review})=>{
    const review_text = review.review_text;
    allReviews.push(review_text);
    allReviewsRatings.push(-1);
  });

  return { allReviews, allReviewsRatings };
};

const convertRestData = (allFavors, rest) => {
  const allReviewsData = flattenAllReviewRatings(rest.all_reviews);
  const userVotes = Number(rest.user_rating.votes);
  const userRating = userVotes === 0? -100 : Number(rest.user_rating.aggregate_rating);
  const allReviewsCount = allReviewsData.allReviews.length;
  const all_reviews_rating = allReviewsCount===0 ? -100 : -1;
  const finalRating = Number(userRating.toFixed(0));

  return {
    rest_id: rest.id,
    rest_name: rest.name,
    cuisines: rest.cuisines,
    is_favored: allFavors.indexOf( rest.id )>-1,
    featured_image: rest.featured_image,
    photo_count: rest.photo_count,
    photos_url: rest.photos_url,
    menu_url: rest.menu_url,
    phone_numbers: rest.phone_numbers,
    price_range: rest.price_range,
    average_cost_for_two: rest.currency+rest.average_cost_for_two,
    user_rating_votes: userVotes,
    user_rating_average: userRating,
    all_reviews: allReviewsData.allReviews,
    all_reviews_ratings: allReviewsData.allReviewsRatings,
    all_reviews_count: allReviewsCount,
    all_reviews_rating: all_reviews_rating,
    final_rating: finalRating
  }
};






module.exports = {
  convertRestData
};
