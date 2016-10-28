import React from 'react';
import { connect } from 'react-redux';
import { receivePosts } from '../actions/kanbanActions'
import KanbanList from './KanbanList';
import KanbanNew from './KanbanNew';
// import KanbanQueue from './KanbanQueue';


class KanbanPage extends React.Component {
  constructor() {
    super();

    this.state = {
      queue: [],
      progress: [],
      done: []
    };
    this.onKanban = this.onKanban.bind(this)
    this.loadData = this.loadData.bind(this)
    this.createNewCard = this.createNewCard.bind(this)
  }

  onKanban(data) {
    const parsedData = JSON.parse(data.currentTarget.response);
    console.log('Cards****parsedData: ',parsedData);
    let queueCards =  parsedData.cards.filter( card=>{
      return card.Status === 'Queue'
    })
    let progressCards =  parsedData.cards.filter( card=>{
      return card.Status === 'In Progress'
    })
    let doneCards =  parsedData.cards.filter( card=>{
      return card.Status === 'Done'
    })
    //dispatch(kanbanCards(parsedData));
    this.setState({
      queue: queueCards,
      progress: progressCards,
      done: doneCards
    });
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
    return (
      <div id='header'>
        <h1>Kanban Page</h1>
        <KanbanNew
          createNewCard={this.createNewCard}
        />
        <KanbanList
          queue={this.state.queue}
          progress={this.state.progress}
          done={this.state.done}
          load
        />
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