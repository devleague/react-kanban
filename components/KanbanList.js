import React from 'react';
import KanbanItem from './KanbanItem';
import KanbanNew from './KanbanNew';

class KanbanList extends React.Component{
  render(){
    //console.log('this.props',this.props)
    const cards = this.props.queue.map((dataItem)=>{
      return(
        <KanbanItem {...dataItem} key={dataItem.id}  />
      )
    })
    return(
      <div className ={this.props.columnName}>
        <h1>{this.props.columnName}</h1>
          {cards}
      </div>
    )
  }
}

export default KanbanList;