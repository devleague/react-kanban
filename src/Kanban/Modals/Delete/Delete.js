import React from 'react';
import Modal from 'react-modal';
import { deleteCard } from '../../../actions/actions.js'
import { connect } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Delete extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#f00';s
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  deleteCard(props) {
    this.setState({ modalIsOpen: false });
    this.props.dispatch(
      deleteCard(props)
    )
  }

  render() {
    const { info } = this.props

    return (
      <div>
        <button onClick={this.openModal} className="button" id="deleteOpen">Delete</button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="top">
            <button onClick={this.closeModal} id="close" className="button">&times;</button>
            <h3>
              <label id="formTitle">Delete Confirmation</label>
            </h3>
          </div>
          <div>
            Do you really want to delete this card?
            <br />
            <br />
            <div id="confirmButtons">
              <button onClick={this.closeModal} id="no" className="confirmation">No</button>
              <button onClick={() => this.deleteCard(info)} id="yes" className="confirmation">Yes</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect()(Delete);