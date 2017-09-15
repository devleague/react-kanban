import React from 'react'
import { connect } from 'react-redux'
import { editCard, recordDraggedId, saveEdit } from './actions'

class Card extends React.Component {
  constructor(props) {
    super(props);

     this.state = {
        title: '',
        createdBy: '',
        assignedTo: ''
      };
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
    this.props.cardProps.title = e.target.value;
  }

  handleCreatorChange(e) {
    this.setState({ createdBy: e.target.value });
    this.props.cardProps.createdBy = e.target.value;
  }
  handleAssigneeChange(e) {
    this.setState({ assignedTo: e.target.value });
    this.props.cardProps.assignedTo = e.target.value;
  }

  keyDown(e){
    if (e.keyCode===13) {
      this.props.saveEdit(e.target.value);
    }
  }

  drag(e){
    console.log("dragged id ", e.target.id)
    this.props.dragged(e.target.id);
  }

  doubleClick(e){
    this.props.edit(e.target.id);
  }

  render() {
    let b2e = this.props.buttonToEdit;
    let titleID = 'title_' + this.props.cardProps._id;
    let createdID = 'createdby_' +this.props.cardProps._id;
    let assignID = 'assignedto_' + this.props.cardProps._id;

    let input1, input2, input3;
    if (b2e === titleID){ input1 = true }
    if (b2e === createdID){ input2 = true }
    if (b2e === assignID){ input3 = true }

    return (
      <div id={this.props.cardProps._id}
            className={this.props.cardProps.priority}
            draggable="true"
            onDragEnd={this.drag.bind(this)} >
        <div className="card_title">
            <div className="runin">TASK:</div>
            { input1 ?
              <input
                className="input_in_form"
                value={this.props.cardProps.title}
                onChange={this.handleTitleChange.bind(this)}
                onKeyDown={this.keyDown.bind(this)}
              /> :
              <div
                id={titleID}
                className="text"
                onDoubleClick={this.doubleClick.bind(this)}
              >{this.props.cardProps.title}</div>
            }
        </div>

        <div className="created_by">
          <div className="runin">CREATED&nbsp;BY:</div>
            { input2 ?
              <input
                className="input_in_form"
                value={this.props.cardProps.createdBy}
                onChange={this.handleCreatorChange.bind(this)}
                onKeyDown={this.keyDown.bind(this)}
              /> :
              <div
                id={createdID}
                className="text"
                onDoubleClick={this.doubleClick.bind(this)}
              >{this.props.cardProps.createdBy}</div>
            }
        </div>

        <div className="assigned_to">
          <div className="runin">ASSIGNED&nbsp;TO:</div>
          { input3 ?
              <input
                className="input_in_form"
                value={this.props.cardProps.assignedTo}
                onChange={this.handleAssigneeChange.bind(this)}
                onKeyDown={this.keyDown.bind(this)}
              />
            :
              <div
                id={assignID}
                className="text"
                onDoubleClick={this.doubleClick.bind(this)}
              >{this.props.cardProps.assignedTo}</div>
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    dragged: (id) => {
      dispatch(recordDraggedId(id))
    },
    edit: (id) => {
      dispatch(editCard(id))
    },
    saveEdit: (text) => {
      dispatch(saveEdit(text))
    }
  }
}

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)

export default Card