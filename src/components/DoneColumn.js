import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class DoneColumn extends React.Component {
  render() {
    return (
      <div className = "done">
        {this.props.cards.filter(card => (
          card.status === 'done')
        ).map(card => (
          <Card key={card.id} {...card} />
        ))}
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
    onCardClick: (id) => {}
  }
}

DoneColumn = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoneColumn)

export default DoneColumn