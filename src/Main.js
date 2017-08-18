import React from 'react'
import { connect } from 'react-redux'
import AddCard from './AddCard'
import MakeColumn from './MakeColumn'

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <div className="kanban_board">
        <div className="banner">
          <h1>John-Ban</h1>
          <div className="add_card_outer">
            <AddCard edits={this.props}/>
          </div>
        </div>
        <MakeColumn classList={
                                  {
                                    id: 1,
                                    level1: "queue_container",
                                    level2: "queue_header",
                                    level3: "queue_column",
                                    columnName: "in-queue"
                                  }
                                }/>
        <MakeColumn classList={
                                  {
                                    id: 2,
                                    level1: "inProgress_container",
                                    level2: "inProgress_header",
                                    level3: "inProgress_column",
                                    columnName: "in-progress"
                                  }
                                }/>
        <MakeColumn classList={
                                  {
                                    id: 3,
                                    level1: "done_container",
                                    level2: "done_header",
                                    level3: "done_column",
                                    columnName: "done"
                                  }
                                }/>

      </div>
    );
  }
}

// even though this is doing nothing, we need this to make redux work
const mapStateToProps = (state) => {
  return { ...state };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (newCard) => {
//       dispatch(addCard(newCard));
//     }
//   }
// }

Main = connect(
  mapStateToProps
  // mapDispatchToProps
)(Main);

export default Main;