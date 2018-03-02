import {SET_YEAR, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE} from '../constants/Page.js'

export function setYear(year){
    return {
        type: SET_YEAR,
        payload: year
    }
}

export function getPhotos(year) {
    return (dispatch) => {
      dispatch({
        type: GET_PHOTOS_REQUEST,
        year
      })
  
      setTimeout(() => {
        let isSuccess = Math.round(Math.random(10));
        console.log(isSuccess);
        switch(isSuccess){
            case 1:
              return dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [1,2,3,4,5],
                year
              })

            case 0 :
              return dispatch({
                type: GET_PHOTOS_FAILURE,
                payload: ['error'],
                year
              })

            default :
              return alert('Wrong Case')
        }
      }, 1000)
      
    }
  }