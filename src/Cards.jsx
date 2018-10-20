import React from 'react';
import { connect } from 'react-redux';

const Cards = (props) => {
    console.log('pp', props.cards)
    return props.cards
        .filter(card => card.statusId === 'inqueue')
        .map(card => {
            return (
                <div className='card'>
                    <div>{card.id}</div>
                    <div>{card.title}</div>
                    <div>priority: {card.priorityId}</div>
                    <div>assigned by: {card.assigned_by}</div>
                    <button>edit</button>
                    <button>delete</button>
                    <p>{card.user}</p>
                </div>
            )
        })

}

export const Card_inprogress = (props) => {
    console.log('is this one running......', props.cards)
    return props.cards
        .filter(card => card.statusId === 'done')
        .map(card => {
            return (
                <div className='card_inprogress'>
                    <div>{card.id}</div>
                    <div>{card.title}</div>
                    <div>priority: {card.priorityId}</div>
                    <div>assigned by: {card.assigned_by}</div>
                    <button>edit</button>
                    <button>delete</button>
                    <p>{card.user}</p>
                </div>
            )
        })
}



const mapStateToProps = state => {
    console.log('current state: ', state);
    return {
        cards: state,
    }
}

export default connect(mapStateToProps)(Cards);