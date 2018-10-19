import axios from 'axios';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const getAllCards = () => {
    console.log('is this action working....');

    return dispatch => {
        axios.get('http://localhost:8989/cards')
            .then(cards => {
                console.log('is this action working....', cards.data);
                dispatch({ type: GET_ALL_CARDS, cards: cards.data })
            })
            .catch(err => {
                dispatch({ type: 'DISPLAY_ERROR_NPTIFICATION' })
            })

    }
}

export const addCard = (card) => {
    console.log('ACTION: addCard', card)
    return dispatch => {
        axios.post('/card/new', card)
            .then(response => {
                console.log('response', response.data)
                dispatch({ type: GET_ALL_CARDS, payload: response.data })
            })
            .catch(err => {
                console.log('error in addCard action axios call', err)
            })
    }
}