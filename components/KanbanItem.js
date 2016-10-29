import React from 'react';
import { connect } from 'react-redux';
import { moveCards } from '../actions/kanbanActions'
import KanbanPage from './KanbanPage'

class KanbanItem extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    console.log("hit handleSubmit")
    event.preventDefault()

    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (data)=>{
      console.log(data)
    });
    oReq.addEventListener("error", ()=>{});
    oReq.open("PUT", "http://localhost:3000/api/edit");
    oReq.setRequestHeader("content-type", "application/json");
    oReq.send(JSON.stringify({Title:this.props.Title, Status:this.props.Status}));
    console.log("this.props.status",this.props.Status)
  }

  render() {
    let cardButton;
    if(this.props.Status === "Queue") {
      cardButton = (
        <div>
          <button onClick={this.handleSubmit}>In Progress</button>
        </div>
      )} else {
        cardButton = (
        <div>
          <button onClick={this.handleSubmit}>Done</button>
        </div>
        )
      }
    return (
      <div>
          <h4>{this.props.Title}</h4>
          <p>{this.props.Priority}</p>
          <p>{this.props.Status}</p>
          <p>{this.props.Createdby}</p>
          <p>{this.props.Assignedto}</p>
        { cardButton }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { kanbanPageReducer } = state;
  return {
    data: kanbanPageReducer.toJS()
  }
}

export default connect(
  mapStateToProps
)(KanbanItem);

// handleChange(event) {
//     let newState = {}
//     newState[event.target.name] = event.target.value;
//     this.setState(newState);
//     console.log("####",this.state);
//     console.log("event$$$",event)
//   }

// render() {
//   return (
//     <div>
//       <div id="inProgressKanbanCard">
//         <form method ="post" action="/new" type="text">
//           <input type="text" placeholder="Title" onChange={this.handleChange} value={this.state.Title} name='title' />

//         </form>
//       </div>
//     </div>
//   )
// }