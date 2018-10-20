import React from 'react';
import Modal from 'react-modal';
import { editCard } from '../../../actions/actions.js'
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

class Edit extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  editCard(state, props) {
    this.props.dispatch(
      editCard(state, props)
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ modalIsOpen: false });
    this.editCard(this.state, this.props.info);
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: e.target.value
    }, () => {
    })
  }

  prioritySelection = () => {
    const { items } = this.props
    if (items[1] === undefined) {
      return (
        <option>Empty</option>
      )
    } else {
      let info = items[1]
      return info.map(line => <option key={line.id} value={line.id}>{line.name}</option>)
    }
  }

  statusSelection = () => {
    const { items } = this.props
    if (items[2] === undefined) {
      return (
        <option>Empty</option>
      )
    } else {
      let info = items[2]
      return info.map(line => <option key={line.id} value={line.id}>{line.name}</option>)
    }
  }

  userSelection = () => {
    const { items } = this.props
    if (items[3] === undefined) {
      return (
        <option>Empty</option>
      )
    } else {
      let info = items[3]
      return info.map(line => <option key={line.id} value={line.id}>{line.first_name} {line.last_name}</option>)
    }
  }

  render() {
    const { info } = this.props

    return (
      <div>
        <button onClick={this.openModal} className="button" id="editOpen">Edit</button>
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
              <label id="formTitle">Edit Card</label>
            </h3>
          </div>
          <form >
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input onChange={this.handleChange} type="text" name="title" id="title" className="inputBars" placeholder={info.title} />
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input onChange={this.handleChange} type="text" name="body" id="body" className="inputBars" placeholder={info.body} />
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select onChange={this.handleChange} type="text" name="priority_id" id="priority" className="select">
              <option value="">{info.priority_id.name}</option>
              {this.prioritySelection()}
            </select>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select onChange={this.handleChange} type="text" name="status_id" id="status" className="select">
              <option value="">{info.status_id.name}</option>
              {this.statusSelection()}
            </select>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select onChange={this.handleChange} type="text" name="created_by" id="createdBy" className="select">
              <option value="">{`${info.created_by.first_name} ${info.created_by.last_name}`}</option>
              {this.userSelection()}
            </select>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select onChange={this.handleChange} type="text" name="assigned_to" id="assignedTo" className="select">
              <option value="">{`${info.assigned_to.first_name} ${info.assigned_to.last_name}`}</option>
              {this.userSelection()}
            </select>
            <br />
            <br />
            <label>
              <input type="submit" value="Submit" id="submitButton" onClick={this.handleSubmit}></input>
            </label>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state
  }
}

export default connect(mapStateToProps)(Edit);