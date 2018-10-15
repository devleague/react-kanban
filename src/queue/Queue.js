// import React, { Component } from 'react';
import React from 'react';
import '../App.css';

// class Queue extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className="App-queue">
        
//             </div>
//         )
//     }

// }

const InQueue = (props) => {
    return props.items.filter(queueItem => queueItem.status === "In Queue").map(queueItem => 
        <div key={queueItem.id} className="InQueue-container">
            <div className="item-title">    {queueItem.title}
            </div>
            <select classname="status">
                <option value="in-queue">
                    In Queue
                </option>
                <option value="in-progress">
                    In Progress    
                </option>    
                <option value="done">
                    Done
                </option>
            </select>
            <div className="created-by">
                {queueItem.created_by}
            </div>
            <div className="assigned-to">
                {queueItem.assigned_to}
            </div>
        </div>    
    )
}
 
export default InQueue;