


export const sortRestaurantsBy = (restaurants, sortby) => {
  // byDistance
  if(sortby === 'distance') {
    restaurants.sort((a,b)=> {
      return a.final_distance-b.final_distance;
    });
    return restaurants;
  }

  // byRating
  if(sortby === 'rating') {
    restaurants.sort((a,b)=> {
      if(a.final_rating < b.final_rating) {
        return 1;
      } else if(a.final_rating > b.final_rating) {
        return -1;
      } else {
        return a.final_distance-b.final_distance;
      }
    });
    return restaurants;
  }

  // byBookmark
  const favors = [], nonFavors=[];
  for(var i=0; i<restaurants.length; i++) {
    const restaurant = restaurants[i];
    if(restaurant.is_favored) {
      favors.push(restaurant);
    } else {
      nonFavors.push(restaurant);
    }
  }
  favors.sort((a,b)=> {
    return a.final_distance-b.final_distance;
  });
  nonFavors.sort((a,b)=> {
    return a.final_distance-b.final_distance;
  });
  return favors.concat(nonFavors);
};
