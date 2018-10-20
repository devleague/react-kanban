import React, { Component } from 'react';

import './Kanban.css';

import Queue from "./Inqueue/queue.js";
import Progress from "./Inprogress/progress.js";
import Done from "./Done/done.js";
import { connect } from 'react-redux';
import { toLeft, toRight } from '../actions/actions.js'


class Kanban extends Component {
  // constructor(props) {
  //   super(props)
  // }

  toRight = (props) => {
    this.props.dispatch(
      toRight(props)
    )
  }

  toLeft = (props) => {
    this.props.dispatch(
      toLeft(props)
    )
  }

  render() {

    if (this.props.items.length === 0) {
      const { items } = this.props

      return (
        <div id="Kanban">
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
        </div>
      );
    } else {
      const { items: info } = this.props
      const items = info[0]

      return (
        <div id="Kanban">
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
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state
  }
}

export default connect(mapStateToProps)(Kanban);