import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
// import { configureStore } from "@reduxjs/toolkit";

import { addLikeReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = combineReducers({
  favStore: addLikeReducer,
});

export const Stores = createStore(reducer, applyMiddleware(thunk));

export const persistor = persistStore(Stores);
