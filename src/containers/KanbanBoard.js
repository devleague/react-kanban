import React from 'react'
import { connect } from 'react-redux'
import DoneColumn from '../components/DoneColumn'
import InProgressColumn from '../components/InProgressColumn'
import QueueColumn from '../components/QueueColumn'
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
        <div>
        <ul>
        <div>
        <QueueColumn />
        </div>
        <div>
        <InProgressColumn />
        </div>
        <div>
        <DoneColumn />
        </div>
        </ul>
        </div>
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