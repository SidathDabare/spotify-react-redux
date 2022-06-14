/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import playerReducer from "../reducers/playerReducer"
import songSearchReducer from "../reducers/searchReducer"

const store = configureStore({
  //reducer: mainReducer,
  reducer: combineReducers({
    songSearchReducer: songSearchReducer,
    playerReducer: playerReducer,
  }),
  // we're going to tell Redux which reducer function to use!
})
export default store
