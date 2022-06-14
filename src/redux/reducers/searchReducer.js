/** @format */

import { GET_SONGS, GET_SONGS_ERROR, GET_SONGS_LOADING } from "../actions"

const initialState = {
  songs: [],
  error: false,
  loading: false,
}

const songSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
      }
    case GET_SONGS_ERROR:
      return {
        ...state,
        error: true,
      }
    case GET_SONGS_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default songSearchReducer
