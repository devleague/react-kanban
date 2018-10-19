import React from 'react';
// import Statuses from './Statuses.jsx';
// import { connect } from 'react-redux';

const Cards = (props) => {
    console.log('props in cards component', props)
    // return props.cards.map(card => <Card key={card.id} title={card.title} priorityId={card.priorityId} assigned_by={card.assigned_by} user={card.user} />)
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}




function CardList(props) {
    console.log(props.cards[0])
    return props.cards.map(card => <Card key={card.id} title={card.title} priorityId={card.priorityId} assigned_by={card.assigned_by} user={card.user} />)
}

function Card(props) {
    console.log('props........~~!!!!!!', props);
    return (
        <div class='card'>
            <div>{props.title}</div>
            <div>priority: {props.priorityId}</div>
            <div>assigned by: {props.assigned_by}</div>
            <button>edit</button>
            <button>delete</button>
            <p>{props.user}</p>
        </div>
    )


}
// const mapReduxStoreStateToTheComponentProps = state => {
//     return {
//         cards: state
//     }
// }

export default Cards
