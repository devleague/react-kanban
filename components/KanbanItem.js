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

    let targetStatus = event.target.innerHTML;

    event.preventDefault();
    this.props.moveCards({
      id:this.props.id,
      status: targetStatus
    });
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (data)=>{
    });
    oReq.addEventListener("error", ()=>{});
    oReq.open("PUT", "http://localhost:3000/api/edit");
    oReq.setRequestHeader("content-type", "application/json");


    if(targetStatus === "Queue"){
      console.log("target queue")
      oReq.send(JSON.stringify({
        Title:this.props.Title,
        Status:"hello"
       }));
    } else {
       oReq.send(JSON.stringify({
        Title:this.props.Title,
        Status:this.props.Status
       }));
    }
  }

  render() {
    let cardButton;
    if(this.props.Status === "Queue") {
      cardButton = (
        <div>
          <button onClick={this.handleSubmit}>In Progress</button>
        </div>
      )} if(this.props.Status === "In Progress"){
        cardButton = (
        <div>
          <button onClick={this.handleSubmit} >Done</button>
          <button onClick={this.handleSubmit}  >Queue</button>
        </div>
        )
      }if(this.props.Status === "Done"){
        cardButton = (
        <div>
          <button onClick={this.handleSubmit}>In Progress</button>
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
  mapStateToProps,{ moveCards }
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