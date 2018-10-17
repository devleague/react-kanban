import React from 'react';
import Popup from "reactjs-popup";

const Add = () => (
  <Popup trigger={<button className="button" id="newOpen"> Add a Card </button>} modal>
    {close => (
      <div className="modal">
        <div className="top">
          <h3>
            <label id="formTitle">New Card</label>
          </h3>
          <button
            id="close"
            className="button"
            onClick={() => {
              close();
            }}
          >
            &times;
          </button>
        </div>
        <div className="content">
          <form>
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="title" id="title" className="inputBars" placeholder="Title of Card"></input>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="body" id="body" className="inputBars" placeholder="Task"></input>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select type="text" name="priority" id="priority" className="select">
              <option value="">Please Choose a Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select type="text" name="status" id="status" className="select">
              <option value="">Please Choose a Status</option>
              <option value="In-Queue">In-Queue</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Done">Done</option>
            </select>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="createdBy" id="createdBy" className="inputBars" placeholder="Created By..."></input>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="assignedTo" id="assignedTo" className="inputBars" placeholder="Assigned To..."></input>
            <br />
            <br />
            <label>
              <input type="submit" value="Submit" id="submitButton"></input>
            </label>
          </form>
        </div>
      </div>
    )}
  </Popup>
);

export default Add;