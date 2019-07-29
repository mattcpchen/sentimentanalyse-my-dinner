
export const updateUserLocation = ({lon, lat}) => {
  return {
    type: 'UPDATE_USER_LOCATION',
    lon: lon,
    lat: lat
  }
};

export const chooseCuisine = (cuisineId, cuisineName) => {
  return {
    type: 'CHOOSE_CUISINE',
    cuisineId: cuisineId,
    cuisineName: cuisineName
  }
};

export const chooseSortby = (sortby) => {
  return {
    type: 'CHOOSE_SORTBY',
    sortby: sortby
  }
};

