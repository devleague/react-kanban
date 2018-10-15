import React, { Component } from 'react';

import './Kanban.css';

import data from './Data/data.js';
import Queue from "./Inqueue/queue.js";
import Progress from "./Inprogress/progress.js";
import Done from "./Done/done.js";


class Kanban extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: data
    }
  }

  toRight = (card) => {
    let arr = this.state.items;
    let targetArr = this.state.items.filter(item =>
      item.id === card.id
    );
    let updatedArr = this.state.items.filter(item =>
      item.id === card.id
    );
    if (card.status === "In-Queue") {
      updatedArr[0].status = "In-Progress";
    } else if (card.status === "In-Progress") {
      updatedArr[0].status = "Done";
    }
    arr.slice(arr.indexOf(targetArr), 1, updatedArr[0]);
    this.setState({
      items: arr
    })
  }

  toLeft = (card) => {
    let arr = this.state.items;
    let targetArr = this.state.items.filter(item =>
      item.id === card.id
    );
    let updatedArr = this.state.items.filter(item =>
      item.id === card.id
    );
    if (card.status === "Done") {
      updatedArr[0].status = "In-Progress";
    } else if (card.status === "In-Progress") {
      updatedArr[0].status = "In-Queue";
    }
    arr.slice(arr.indexOf(targetArr), 1, updatedArr[0]);
    this.setState({
      items: arr
    })
  }

  render() {
    const { items } = this.state

    return (
      <div id="Kanban">
        {/* <div id="Column-Container" className="Containers"> */}
        <div id="Queue-Title" className="Titles">
          In-Queue
            <div className="Queue-Container">
            <div className="queueCards">
              <Queue items={items} toRight={this.toRight} />
            </div>
          </div>
        </div>
        <div id="Progress-Title" className="Titles">
          In-Progress
           <div id="Progress-Container" className="Containers">
            <div className="queueCards">
              <Progress items={items} toRight={this.toRight} toLeft={this.toLeft} />
            </div>
          </div>
        </div>
        <div id="Done-Title" className="Titles">
          Done
            <div id="Done-Container" className="Containers">
            <div className="queueCards">
              <Done items={items} toLeft={this.toLeft} />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Kanban;