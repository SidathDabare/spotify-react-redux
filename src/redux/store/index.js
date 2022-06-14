/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import songSearchReducer from "../reducers"

const store = configureStore({
  //reducer: mainReducer,
  reducer: combineReducers({
    songSearchReducer: songSearchReducer,
  }),
  // we're going to tell Redux which reducer function to use!
})
export default store
