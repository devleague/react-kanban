import React from 'react'
import { connect } from 'react-redux'
import { recordDraggedId, editCard } from './actions'
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

  doubleClick(id){
    this.props.edit(id)
  }

  render() {
    return (
      <div className='cards'>
        { this.props.cards.map( card => {
          if (card.status === this.props.columnName ){
            return <Card
                    key={ card._id } { ...card }
                    drag={this.drag.bind(this)}
                    edit={() => { this.doubleClick(card._id)} }
            />
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
    },
    edit: (id) => {
      dispatch(editCard(id))
    }
  }
}

QueueCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(QueueCards)

export default QueueCards

//look at focus & onblur