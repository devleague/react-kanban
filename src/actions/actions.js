import axios from 'axios';

export const GET_ALL_CARDS = "GET_ALL_CARDS";
export const CHANGE_STATUS_LEFT = "CHANGE_STATUS_LEFT";
export const CHANGE_STATUS_RIGHT = "CHANGE_STATUS_RIGHT";
export const GET_FORM_DATA = "GET_FORM_DATA";
export const ADD_CARD = "ADD_CARD";

export const getAllCards = () => {
  return dispatch => {
    axios.get('http://localhost:8989/cards')
      .then(results => {
        dispatch({
          type: GET_ALL_CARDS,
          payload: results.data
        })
      })
  }
}

export const toLeft = (props) => {
  return dispatch => {
    axios.put(`http://localhost:8989/left/${props.id}`)
      .then(results => {
        dispatch({
          type: CHANGE_STATUS_LEFT,
          payload: results.data
        })
      })
  }
}

export const toRight = (props) => {
  return dispatch => {
    axios.put(`http://localhost:8989/right/${props.id}`)
      .then(results => {
        dispatch({
          type: CHANGE_STATUS_RIGHT,
          payload: results.data
        })
      })
  }
}


export const addCard = (state) => {
  return dispatch => {
    axios.post('http://localhost:8989/add', { state })
      .then(results => {
        console.log(results, "WAT AM I SEEING?")
        dispatch({
          type: ADD_CARD,
          payload: results.data
        })
      })
  }
}