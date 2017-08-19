import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class OueueColumn extends React.Component {

  fetchTasks(url) {
     fetch(url)
       .then(tasks => tasks.json())
       .then(tasks => {
         console.log('response',tasks);
         return tasks.json;
       });
   }
   componentDidMount(){
     this.fetchTasks('/api/test');
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