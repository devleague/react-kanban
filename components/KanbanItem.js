import React from 'react';

class KanbanItem extends React.Component{
  render() {
    return (
      <div>
        <h4>{this.props.Title}</h4>
        <p>{this.props.Priority}</p>
        <p>{this.props.Status}</p>
        <p>{this.props.Createdby}</p>
        <p>{this.props.Assignedto}</p>
        <button onClick={this.handleChange}>In Progress</button>
      </div>
    )
  }
}

export default KanbanItem;


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