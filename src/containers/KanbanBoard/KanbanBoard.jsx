import React, { Component } from 'react';
import './KanbanBoard.scss';
import StatusSection from '../../components/StatusSection';
import { connect } from 'react-redux';

class KanbanBoard extends Component {
  render() {
    let queue = [];
    let inProgress = [];
    let completed = [];

    this.props.cards.map((card) => {
      switch (card.status_id) {
        case '1':
          queue.push(card)
          break;
        case '2':
          inProgress.push(card)
          break;
        case '3':
          completed.push(card)
          break;
        default:
          break;
      };
      return {};
    });

    return (
      <div className="kanbanContainer">
        <StatusSection title='Queue' cards={queue} />

        <StatusSection title='In_Progress' cards={inProgress} />

        <StatusSection title='Completed' cards={completed} />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  console.log(state.cards);

  return {
    cards: state.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

KanbanBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);

export default KanbanBoard;