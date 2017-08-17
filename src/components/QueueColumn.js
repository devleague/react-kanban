import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class OueueColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "in-queue">
        {this.props.cards.filter(card => (
          card.status === 'in-queue')
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

OueueColumn = connect(
  mapStateToProps,
  mapDispatchToProps
)(OueueColumn)

export default OueueColumn