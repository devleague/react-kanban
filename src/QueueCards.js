import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'


class QueueCards extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className='cards'>
        { this.props.cards.map( card => {
          if ( card.status === this.props.columnName ){
            return <Card key={card._id} cardProps={card}/>
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

// const mapDispatchToProps = (dispatch) => {

// }

QueueCards = connect(
  mapStateToProps,
  // mapDispatchToProps
)(QueueCards)

export default QueueCards
