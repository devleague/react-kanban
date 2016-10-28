import React from 'react';
import KanbanItem from './KanbanItem';
import KanbanNew from './KanbanNew';

class KanbanList extends React.Component{
  render(){
    console.log('this.props',this.props)
    const QueueNode = this.props.queue.map((dataItem)=>{
      return(
        <KanbanItem {...dataItem} key={dataItem.id}  />
      )
    })
    // const ProgressNode = this.props.progress.map((dataItem)=>{
    //   return(
    //     <KanbanItem {...dataItem} key={dataItem.id} />
    //   )
    // })
    // const DoneNode = this.props.done.map((dataItem)=>{
    //   return (
    //     <KanbanItem {...dataItem} key={dataItem.id} />
    //   )
    // })
    return(
      <div className='kanbanList'>
        <h2> Kanban List</h2>
          <div className="kanbanCardsDiv">
            <div className ="queueDiv">
              <h1>Queue</h1>
                {QueueNode}

            </div>
            <div className ="progressDiv">
              <h1>In Progress</h1>
                {/*ProgressNode*/}
            </div>
            <div className ="doneDiv">
              <h1>Done</h1>
                {/*DoneNode*/}
            </div>
          </div>
      </div>
    )
  }
}

export default KanbanList;