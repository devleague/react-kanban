import React from 'react';
import { connect } from 'react-redux';
import { addAllCards } from '../actions/kanbanActions'
import KanbanList from './KanbanList';
import KanbanNew from './KanbanNew';

// export const LOAD_DATA = "LOAD_DATA";
// import KanbanQueue from './KanbanQueue';


class KanbanPage extends React.Component {
  constructor() {
    super();

    this.onKanban = this.onKanban.bind(this)
    this.loadData = this.loadData.bind(this)
    this.createNewCard = this.createNewCard.bind(this)
  }

  onKanban(data) {
    const { dispatch } = this.props;
    const parsedData = JSON.parse(data.currentTarget.response);

    dispatch(addAllCards(parsedData.cards));
  }

  onKanbanError(error) {
    console.log('error: ', error);
  }

  createNewCard(newCard){
    console.log('hit', newCard);
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.loadData);
    oReq.addEventListener("error", this.onKanbanError);
    console.log(`${this.props.kanbanUrl}/new`);
    oReq.open("POST", `${this.props.kanbanUrl}/new`);
    oReq.setRequestHeader("content-type", "application/json");
    oReq.send(JSON.stringify(newCard));
  }

  loadData(){
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.onKanban);
    oReq.addEventListener("error", this.onKanbanError);
    oReq.open("GET", this.props.kanbanUrl);
    oReq.send();
  };

  componentWillMount() {
    this.loadData();
  }

  render() {
    console.log('this.props',this.props)
    return (
      <div id='header'>
        <h1>Kanban Page</h1>
        <KanbanNew
          createNewCard={this.createNewCard}
        />
        <div className='kanbanList'>
          <h2> Kanban List</h2>
            <div id="list">
              <KanbanList
                  columnName = 'Queue'
                  queue={this.props.data.filter( card =>{
                    return card.Status === 'Queue'
                  })}

              />
              <KanbanList
                columnName = 'In Progress'
                queue={this.props.data.filter( card =>{
                  return card.Status === 'In Progress'
                })}
              />
              <KanbanList
                columnName = 'Done'
                queue={this.props.data.filter( card =>{
                  return card.Status === 'Done'
                })}
              />
            </div>
        </div>
      </div>
    )
  }
}

KanbanPage.defaultProps = {
  queue: React.PropTypes.array,
  progress: React.PropTypes.array,
  done: React.PropTypes.array
}

KanbanPage.defaultProps = {
  queue: [],
  progress: [],
  done: []
}

const mapStateToProps = (state, ownProps) => {
  const { kanbanPageReducer} = state;
  return {
    data: kanbanPageReducer.toJS()
  }
}

export default connect(
  mapStateToProps
)(KanbanPage);

