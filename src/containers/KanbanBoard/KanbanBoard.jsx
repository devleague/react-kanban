import React, { Component } from 'react';
import './KanbanBoard.scss';
import StatusSection from '../../components/StatusSection';
import { connect } from 'react-redux';
import AddCard from '../AddCard';
import Header from '../../components/Header';
import CardDetail from '../CardDetail';
import EditCard from '../EditCard';

class KanbanBoard extends Component {
  state = {
    addFormOpen: false,
    detailOpen: false,
    editFormOpen: false
  };

  toggleForm = () => {
    this.setState(prevState => {
      return { addFormOpen: !prevState.addFormOpen };
    });
  };

  closeForm = () => {
    this.setState({ addFormOpen: false });
  };

  toggleEdit = () => {
    this.setState(prevState => {
      return { editFormOpen: !prevState.editFormOpen };
    });
  };

  closeEdit = () => {
    this.setState({ editFormOpen: false });
  };

  toggleDetail = () => {
    this.setState(prevState => {
      return { detailOpen: !prevState.detailOpen };
    });
  };

  closeDetail = () => {
    this.setState({ detailOpen: false });
  };

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
      <>
        <Header title='Kanban' show={this.toggleForm} />

        <div className="kanbanContainer">

          <StatusSection title='Queue' cards={queue} showCard={this.toggleDetail} />

          <StatusSection title='In_Progress' cards={inProgress} showCard={this.toggleDetail} />

          <StatusSection title='Completed' cards={completed} showCard={this.toggleDetail} />

          {this.state.addFormOpen ? <AddCard close={this.closeForm} showCard={this.toggleDetail} /> : null}

          {this.state.detailOpen ? <CardDetail card={this.props.selectedCard} closeCard={this.closeDetail} showEdit={this.toggleEdit} /> : null}

          {this.state.editFormOpen ? <EditCard card={this.props.selectedCard} closeEdit={this.closeEdit} /> : null}

        </div>
      </>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    selectedCard: state.selectedCard
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