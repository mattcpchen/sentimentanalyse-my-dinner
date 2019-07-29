import analyzeReview from './/tfService'


const getRandomRating = () => {
  const tfScore = Math.floor(Math.random()*101); //0-100
  const emojiScore = 1+((tfScore)/25); // 1-5
  return  Math.round(emojiScore*100)/100;
}


const analyzeText = (review, callback) => {
  analyzeReview(review, (a, score)=>{
    const tfScore = Number(score);
    const emojiScore = 1+((tfScore)/25); // 1-5
    // console.log('===> ', a);
    callback(Math.round(emojiScore*2)/2); // make sure it has 1.5,2,...
  });
};

const analyzeReviews = (allReviews, callback) => {
  let countdown = allReviews.length;
  var allDatas = [];
  var executeFn = () => {
    for(let i=0; i<allReviews.length; i++) {
      analyzeText(allReviews[i], function(data){
        allDatas[i] = data;
        countdown--;
        if(countdown === 0) {
          callback(allDatas);
        }
      })
    }
  }
  executeFn();
};

export const tfHandleRatings = ({
  rest_id,
  all_reviews,
  all_reviews_ratings,
  user_rating_average,
  user_rating_votes
}, callback) => {
  const allInOneReviews = all_reviews.reduce((acc,review)=>{
    return acc+' '+review;
  },'');
  const allForAnalyzes = [allInOneReviews].concat(all_reviews);
  analyzeReviews(allForAnalyzes, (allDatas)=> {
    const allReviewsRating = allDatas[0];
    const allReviewsRatings = allDatas.slice(1);
    const finalRating = (()=>{
      const userScores = user_rating_average * user_rating_votes;
      const reviewScores = allReviewsRating * all_reviews_ratings.length;
      const rawRating = (userScores+reviewScores)/(user_rating_votes+all_reviews_ratings.length);
      return Math.round(rawRating);
    })();
    callback({
      finalRating,
      allReviewsRating,
      allReviewsRatings,
    });
  });
};

