import React from 'react';
import '../App.css';

const Done = (props) => {
    console.log("Done props", props)
    
    return props.items.filter(doneItems => doneItems.status === "done").map(doneItems =>
        <div key={doneItems.id} className="Done">
            <div className="item-title">
                {doneItems.title}
            </div>
            <div className="created-by">
                Created By: {doneItems.created_by}
            </div>
            <div className="assigned-to">
                Assigned To: {doneItems.assigned_to}
            </div>
            {/* Priority Drop Down */}
            <select>
                <option value="low">
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
            {/* Status Drop Down */}
            <select>
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
 
        </div>
    )
}

export default Done; 
