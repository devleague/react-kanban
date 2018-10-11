import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueItems: [
        {
          id: 1,
          title: "Clean car",
          body: "Give it the ol vacuum",
          priority: "low",
          status: "Todo",
          createdBy: "Jamie",
          assignedTo: "Carl"
        },
        {
          id: 2,
          title: "Clean room",
          body: "Give it the ol broom",
          priority: "low",
          status: "Todo",
          createdBy: "Harsh",
          assignedTo: "Sarah"
        }
      ],
      inProgressItems: [
        {
          id: 3,
          title: "Walk the doggy",
          body: "Give it the ol leash",
          priority: "low",
          status: "Doing",
          createdBy: "Jamie",
          assignedTo: "Carl"
        },
        {
          id: 4,
          title: "Take out trash",
          body: "Give it the ol can",
          priority: "low",
          status: "Doing",
          createdBy: "Harsh",
          assignedTo: "Sarah"
        }
      ],
      doneItems: [
        {
          id: 5,
          title: "Study programming",
          body: "Give it the ol college whirl",
          priority: "low",
          status: "Done",
          createdBy: "Jamie",
          assignedTo: "Carl"
        },
        {
          id: 6,
          title: "Grocery shopping",
          body: "Give it the ol credit card",
          priority: "low",
          status: "Done",
          createdBy: "Harsh",
          assignedTo: "Sarah"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>

      <div id="bigContainer">
        <div class="cardContainer">
          <h1>Todo</h1>
          <div class="cardDiv">
            <ItemList items={this.state.queueItems} />
          </div>
        </div>
        <div class="cardContainer">
          <h1>Doing</h1>
          <div class="cardDiv">
            <ItemList items={this.state.inProgressItems} />
          </div>
        </div>
        <div class="cardContainer">
          <h1>Done</h1>
          <div class="cardDiv">
            <ItemList items={this.state.doneItems} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

// function ItemList(props) {
//   console.log('props', props)
//   return props.items.map( item => <div>{item.title}</div>)
// }

function ItemList(props) {
  return props.items.map(item => <Item title={item.title} body={item.body} />);
}

function Item(props) {
  return (
    <div class="cards" key={props.id}>
      {props.title} <br /> {props.body}
    </div>
  );
}

export default App;
