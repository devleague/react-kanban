import React, { Component } from "react";
import { connect } from "react-redux";
import NewCard from "./NewCard"


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false
    }

    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  render(){
    return (
      <nav className="level is-mobile">
        <div className="level-left">KANBAN</div>
        <div className="level-right">
          <button onClick={this.toggleModal} className="button is-dark">New Task</button>
        </div>

        <NewCard
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
        >
        </NewCard>
      </nav>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {

  }
}

const ConnectedHeader = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Header);

export default ConnectedHeader;
