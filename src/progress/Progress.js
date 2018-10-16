import React from 'react';
import '../App.css';

const InProgress = (props) => {
    console.log("Progress props", props.items.filter(item => item.status === "in progress"))
    return props.items.filter(progressItem => 
        progressItem.status === "in progress").map(progressItem => 
        <div key={progressItem.id} className="InProgress">
            <div className="item-title">    {progressItem.title}
            </div>
            <div className="created-by">
                Created By: {progressItem.created_by}
            </div>
            <div className="assigned-to">
                Assigned To: {progressItem.assigned_to}
            </div>               
            <select>
                <option value="low" className="low">
                    Low
                </option>
                <option value="medium">
                    Medium
                </option>
                <option value="high">
                    High
                </option>
            </select>
            <br/>    
            <select className="status">
                <option value="in-progress">
                    In Progress
                </option>
                <option value="in-queue">
                    In Queue    
                </option>    
                <option value="done">
                    Done
                </option>
            </select>
        </div>            
    )
}

export default InProgress;
