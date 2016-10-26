import React from 'react';
import Queue from './Queue';
import Progress from './Progress';
import Done from './Done';

class KanbanList extends React.Component{
  render(){
    console.log('this.props.data',this.props.data)
    const KanbanListNode = this.props.data.map((dataItem)=>{
      console.log('dataItem', dataItem)
      return(
        <KanbanItem
           Title={dataItem.data.title}
           Priority={dataItem.data.id}/>
      )
    })
    console.log("this props", this.props)
    return(
      <div>
        <h2> Kanban List</h2>
        {KanbanListNode}
      </div>
    )
  }
}

export default KanbanList;