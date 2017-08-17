import React from 'react'
import { connect } from 'react-redux'
import DoneColumn from '../components/DoneColumn'
import InProgressColumn from '../components/InProgressColumn'
import QueueColumn from '../components/QueueColumn'
import { toggleTodo } from './App/actions'

class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className ="parent">
        <div className ="queueColumn">
        <h2 className ='task'> TO DO </h2>
        <QueueColumn />
        </div>
        <div className ="progressColumn">
        <h2 className ='task'> DOING </h2>
        <InProgressColumn />
        </div>
        <div className ="doneColumn">
        <h2 className ='task'> DONE </h2>
        <DoneColumn />
        </div>
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