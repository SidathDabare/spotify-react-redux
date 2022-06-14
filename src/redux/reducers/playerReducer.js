/** @format */

import { ADD_TO_PLAYER } from "../actions"

const initialState = {
  content: [], // the value of content will be our array of books in the cart!
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    // the book is getting passed with action.payload
    case ADD_TO_PLAYER:
      return {
        ...state,

        content: [...state.content, action.payload], // this works
      }

    default:
      return state
  }
}

export default playerReducer
