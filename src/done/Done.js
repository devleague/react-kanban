import React from 'react';
import '../App.css';

const Done = (props) => {
    console.log("Done props", props)
    
    return props.items.filter(doneItems => doneItems.status === "done").map(doneItems =>
        <div key={doneItem.id} className="Done">
            <div className="item-title">
                {doneItem.title}
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
            <div className="created-by">
                Created By: {doneItem.created_by}
            </div>
            <div className="assigned-to">
                Assigned To: {doneItem.assigned_to}
            </div>
        </div>
    )
}

export default Done; 
