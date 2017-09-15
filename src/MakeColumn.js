import React from 'react'
import { connect } from 'react-redux'
import SelectCards from './QueueCards'
import { recordDroppedId } from './actions'

class MakeColumn extends React.Component {

  dragover_handler(e) {
     e.preventDefault();
     e.dataTransfer.dropEffect = "move"
  }

  drop_handler(e) {
     e.preventDefault();
     this.props.dropID(e.currentTarget.id)
  }

  render() {
    return (
      <div id={this.props.classList.id} className={this.props.classList.level1} onDrop={this.drop_handler.bind(this)} onDragOver={this.dragover_handler.bind(this)}>
          <div className={this.props.classList.level2}>{this.props.classList.columnName}</div>
          <div className={this.props.classList.level3}>
            <SelectCards columnName={this.props.classList.columnName}/>
          </div>
      </div>
    );
  }
}

// even though this is doing nothing, we need this to make redux work
const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    dropID: (id) => {
      dispatch(recordDroppedId(id));
    }
  }
}

MakeColumn = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeColumn);

export default MakeColumn;