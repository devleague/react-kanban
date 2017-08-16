import React from 'react'
import { connect } from 'react-redux'
import { changeStatus } from './actions'
import Card from './Card'

class QueueCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  };

  componentDidMount() {
    this.setState({
        cards: cardList
      });
    console.log(this.props, this.state);
   }

  componentWillMount() { }

  onClick(id) {
    this.props.onQueueClick(id);
  }

  render() {
    return (
      <div className='cards'>
        { this.state.cards.map( card => {
          if (card.status === this.props.columnName ){
            return <Card key={ card.id } { ...card } onClick={() => this.onClick(card.id)} />
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQueueClick: (id) => {
      dispatch(changeStatus(id));
    }
  }
}

QueueCards = connect(
  mapStateToProps
)(QueueCards)


export default QueueCards

let cardList = [

      {
        "_id": 1,
        "title": "Fix CSS",
        "priority": "medium",
        "status": "in-queue",
        "createdBy": "John",
        "assignedTo": "Dorie"
      },
      {
        "_id": 2,
        "title": "Improve UI",
        "priority": "low",
        "status": "in-queue",
        "createdBy": "Dorie",
        "assignedTo": "Emilie"
      },
      {
        "_id": 4,
        "title": "Delete console logs",
        "priority": "high",
        "status": "in-progress",
        "createdBy": "Emilie",
        "assignedTo": "Frank"
      },
      {
        "_id": 5,
        "title": "East Do-nuts",
        "priority": "blocker",
        "status": "done",
        "createdBy": "Frank",
        "assignedTo": "John"
      }
  ]