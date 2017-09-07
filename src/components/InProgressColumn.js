import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class InProgressColumn extends React.Component {
  render() {
    return (
      <div className = "in-progress">
        {this.props.cards.filter(card => (
          card.status === 'in-progress')
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

InProgressColumn = connect(
  mapStateToProps,
  mapDispatchToProps
)(InProgressColumn)

export default InProgressColumn