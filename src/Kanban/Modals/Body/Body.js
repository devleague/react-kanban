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

class Body extends React.Component {
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
      <div className="title">
        <button onClick={this.openModal} className="button">{info.title}</button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="bodyModal">
            <button onClick={this.closeModal} id="closeBody" className="button">&times;</button>
            <h3>
              <label id="formTitle">{info.title}</label>
            </h3>
          </div>
          <div key={info.id} id="bodyContainer">
            <div className="Body">{info.body}</div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect()(Body);