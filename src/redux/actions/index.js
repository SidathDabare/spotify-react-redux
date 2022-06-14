/** @format */

// export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
// export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
// export const SET_USERNAME = "SET_USERNAME"
export const GET_SONGS = "GET_SONGS"
export const GET_SONGS_ERROR = "GET_SONGS_ERROR"
export const GET_SONGS_LOADING = "GET_SONGS_LOADING"

// export const removeFromFavouritesAction = (indexToRemove) => {
//   return {
//     type: REMOVE_FROM_FAVOURITES,
//     payload: indexToRemove,
//   }
// }

// export const addToCartActionWithThunk = (jobAdd) => {
//   return async (dispatch, getState) => {
//     console.log("I'm dispatching this from a function!")
//     // I can do whatever I want here...

//     dispatch({
//       type: ADD_TO_FAVOURITES, // this is mandatory
//       payload: jobAdd, // this is not a mandatory property for every action
//     })
//   }
// }
// export const jobsLoading = () => {
//   return {
//     type: GET_SONGS_LOADING,
//   }
// }

export const getSongsAction = (string) => {
  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  })
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + string,
        {
          method: "GET",
          headers,
        }
      )
      if (response.ok) {
        let songs = await response.json()
        dispatch({
          type: GET_SONGS,
          payload: songs.data,
        })
      } else {
        console.log("error")
        dispatch({
          type: GET_SONGS_ERROR,
        })
        dispatch({
          type: GET_SONGS_LOADING,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_SONGS_ERROR,
      })
      dispatch({
        type: GET_SONGS_LOADING,
      })
    }
  }
}
