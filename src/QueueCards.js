import React from 'react'
import { connect } from 'react-redux'
import { changeStatus } from './actions'
import Card from './Card'

class QueueCards extends React.Component {

  componentDidMount() {}

  componentWillMount() {}

  clickMe(id) {
    this.props.onQueueClick(id);
  }

  render() {
    return (
      <div className='cards'>
        { this.props.cards.map( card => {
          if (card.status === this.props.columnName ){
            return <Card key={ card._id } { ...card } onClick={this.clickMe.bind(this, card._id)} />
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQueueClick: (id) => {
      dispatch(changeStatus(id));
    }
  }
}

QueueCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(QueueCards)


export default QueueCards

