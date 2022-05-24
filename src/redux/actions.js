import { ADD_LIKE_STORE, REMOVE_LIKE_STORE } from "../utils/constants";
export const addLikeStore = (storeInfo) => (dispatch) => {
  const item = {
    name: storeInfo.name,
    address: storeInfo.address,
    adr: storeInfo.adr,
    phone: storeInfo.phone,
    time: storeInfo.time,
    photo: storeInfo.photo,
    star: storeInfo.value,
    menu: storeInfo,
    url: storeInfo.url,
    title: storeInfo.title,
    food1: storeInfo.food1,
    food1des: storeInfo.food1des,
    food1img: storeInfo.food1img,
    food2: storeInfo.food2,
    food2des: storeInfo.food2des,
    food2img: storeInfo.food2img,
    food3: storeInfo.food3,
    food3des: storeInfo.food3des,
    food3img: storeInfo.food3img,
  };
  dispatch({
    type: ADD_LIKE_STORE,
    payload: item,
  });
};

export const removeLikeStore = (storeName) => (dispatch) => {
  dispatch({
    type: REMOVE_LIKE_STORE,
    payload: storeName,
  });
};
