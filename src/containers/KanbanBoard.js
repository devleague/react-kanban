import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import { toggleTodo } from './App/actions'

class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  onClick(id) {
    this.props.onCardClick(id);
  }

  render() {
    return (
      <ul>
        {this.props.cards.map(card => (
          <Card key={card.id} {...card} onClick={() => this.onClick(card.id)} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
}

KanbanBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard)

export default KanbanBoard