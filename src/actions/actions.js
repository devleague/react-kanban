import axios from 'axios';

export const GET_ALL_CARDS = "GET_ALL_CARDS";
export const CHANGE_STATUS_LEFT = "CHANGE_STATUS_LEFT";
export const CHANGE_STATUS_RIGHT = "CHANGE_STATUS_RIGHT";
export const ADD_CARD = "ADD_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const DELETE_CARD = "DELETE_CARD"

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
        dispatch({
          type: ADD_CARD,
          payload: results.data
        })
      })
  }
}

export const editCard = (state, props) => {
  return dispatch => {
    axios.put(`http://localhost:8989/edit/${props.id}`, { state })
      .then(results => {
        dispatch({
          type: EDIT_CARD,
          payload: results.data
        })
      })
  }
}

export const deleteCard = (props) => {
  return dispatch => {
    axios.delete(`http://localhost:8989/delete/${props.id}`)
      .then(results => {
        dispatch({
          type: DELETE_CARD,
          payload: results.data
        })
      })
  }
}