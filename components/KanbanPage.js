import React from 'react';
//import KanbanList from './KanbanList';

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
  }

  onKanban(data) {
    console.log("data###",data);
    const parsedData = JSON.parse(data.currentTarget.response);
    console.log('parsedData: ',parsedData)
    this.setState({ data: parsedData.cards });
  }

  onKanbanError(error) {
    console.log('error: ', error);
  }

  loadData(){
    const oReq = new XMLHttpRequest();
    console.log("TEST",oReq);
    oReq.addEventListener("load", this.onKanban);
    oReq.addEventListener("error", this.onKanbanError);
    console.log('this.props.kanbanUrl',this.props)
    oReq.open("GET", this.props.kanbanUrl);
    oReq.send();
  };

  componentWillMount() {
    this.loadData();
  }

  render() {
    console.log(this.props);
    return (
      <div id='header'>
        <h1>Kanban Page</h1>

      </div>
    )
  }

}


KanbanPage.defaultProps = {
  data: React.PropTypes.array
}

KanbanPage.defaultProps = {
  data: [],
  //KanbanUrl : 'http://localhost:3000/api'
}

export default KanbanPage;