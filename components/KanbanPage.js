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
  }

  onKanban(data) {
    console.log(data);
    const parsedData = JSON.parse(data.currentTarget.response)
    console.log('parsedData: ',parsedData)
    this.setState({ data: parsedData });
  }

  onKanbanError(error) {
    console.log('error: ', error);
  }

  loadData(){
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.onKanban);
    oReq.addEventListener("error", this.onKanban);
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

      </div>
    )
  }

}


KanbanPage.defaultProps = {
  data: React.PropTypes.array
}

KanbanPage.defaultProps = {
  data: []
}

export default KanbanPage;