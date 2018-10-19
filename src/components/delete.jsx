import React, { Component } from 'react';
import Queue from './queue.jsx';

class Delete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carditems: [],
      hasItems: true
    }
  }

  handleDelete = (carditems) => {
    this.setState().status_id = carditems.status_id
    this.setState().title = carditems.title
    this.setState().card_id = carditems.card_id
    this.props.sendData(this.state)
  }

  render(props) {

    return this.props.setState((carditems, index) => {
        return (

          <div>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>
                <div>
                  <Queue sendData={this.handleDelete} id={carditems.card_id} key={carditems.card_id} name={carditems.title} status={carditems.status_id} />
                  {carditems.body}
                </div>
              </div>
            )}
          </div>

        )
      })
  }
}

export default Delete;