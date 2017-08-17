import React from 'react'
import { connect } from 'react-redux'
import { recordDraggedId } from './actions'
import Card from './Card'

class QueueCards extends React.Component {

  componentDidMount() {}

  componentWillMount() {
    if (!this.props.card){

      this.setState(this.props);
    }
  }

  drag(e){
    this.props.dragged(e.target.id);
  }

  render() {
    return (
      <div className='cards'>
        { this.props.cards.map( card => {
          if (card.status === this.props.columnName ){
            return <Card key={ card._id } { ...card } drag={this.drag.bind(this)}/>
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
    dragged: (id) => {
      dispatch(recordDraggedId(id))
    }
  }
}

QueueCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(QueueCards)

export default QueueCards

