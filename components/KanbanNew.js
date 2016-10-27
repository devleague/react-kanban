/*import React from 'react';

class KanbanItem extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.Title}</h4>
        <p>{this.props.Priority}</p>
        <p>{this.props.Status}</p>
        <p>{this.props.Createdby}</p>
        <p>{this.props.Assignedto}</p>
      </div>
    )
  }
}

export default KanbanNew;
*/

import React from 'react';

class KanbanNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", priority: "", createdby: "", assignedto: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
    //this is when anything on the input is being typed in by the user
  handleChange(event) {
    let newState = {}
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log("####",this.state);
    console.log("event$$$",event)
  }


    //this is when button is clicked
  handleSubmit(event) {
    //prevents browser from submiting method
    event.preventDefault()
    console.log("event@@",event)
    this.props.createNewCard({
      Title:this.state.title,
      Priority:this.state.priority,
      Createdby:this.state.createdby,
      Assignedto:this.state.assignedto
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <form method ="post" action="/new" type="text">
            <input type="text" placeholder="Title" onChange={this.handleChange} value={this.state.Title} name='title' />
            <br />
            <input type="text" placeholder="Priority" onChange={this.handleChange} value={this.state.Priority} name='priority' /> <br />

            <input type="text" placeholder="Created By" onChange={this.handleChange} value={this.state.Createdby} name='createdby' /> <br />

            <input type="text" placeholder="Assigned To" onChange={this.handleChange} value={this.state.Assignedto} name='assignedto' /> <br />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default KanbanNew;