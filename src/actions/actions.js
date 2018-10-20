import axios from 'axios';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const getAllCards = () => {
    return dispatch => {
        axios.get('/cards')
            .then(res => {
                // console.log('response data: ', res.data)  // working
                dispatch({ type: GET_ALL_CARDS, cards: res.data })
            })
            .catch(err => {
                dispatch({ type: 'DISPLAY_ERROR_NPTIFICATION' })
            })

    }
}

