const localStorageKey = 'tfMyDinner';



export const retriveMyFavCookie = () => {
  let svalue = localStorage.getItem(localStorageKey);
  if(svalue === null) {
    localStorage.setItem(localStorageKey, '');
    svalue = '';
  }
  return svalue.split('|').filter(val => val!=='');
};


export const updateMyFavCookie = (restIds) => {
  localStorage.setItem(localStorageKey, restIds.join('|'));
};


export const addToMyFavCookie = (restId) => {
  let svalue = localStorage.getItem(localStorageKey);
  if(!svalue) {
    svalue = restId;
  } else {
    if(svalue.split('|').indexOf(restId) === -1) {
      svalue = (restId + '|') + svalue;
    }
  }
  localStorage.setItem(localStorageKey, svalue);
};

export const removeFromMyFavCookie = (restId) => {
  let svalueArr = localStorage.getItem(localStorageKey).split('|');
  svalueArr = svalueArr.filter(value => value !== restId);
  localStorage.setItem(localStorageKey, svalueArr.join('|'));
};







