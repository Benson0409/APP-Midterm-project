import { ADD_LIKE_STORE, REMOVE_LIKE_STORE } from "../utils/constants";

const initialLikeStore = {
  stores: [],
};

export const addLikeReducer = (state = initialLikeStore, action) => {
  switch (action.type) {
    case ADD_LIKE_STORE:
      return {
        ...state,
        stores: [...state.stores, action.payload],
      };

    case REMOVE_LIKE_STORE:
      return {
        ...state,
        stores: state.stores.filter((store) => store.name !== action.payload),
      };

    default:
      return state;
  }
};
