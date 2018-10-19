import axios from 'axios';

//store constant data in variable
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const getAllTasks = () => {
  //return a function to dispatch action that will dispatch another action
  return dispatch => {
    axios.get('/carditems')
      .then(responseFromDB => {
        console.log('data in actionCreator:', responseFromDB);
        dispatch({ type: GET_ALL_TASKS, payload: responseFromDB.data })
      })
      .catch(err => {
        console.log("ERROR - actions axios getAllTasks:", err);
        // dispatch({ type: DISPLAY_ERROR_NOTIFICATION });
      })
  }
}

//Like a post request to your internal store
export const addTask = (task) => {
  console.log("\nACTION: addTask:", task);
  return dispatch => {
    axios.post('/newtask', task)
      .then(responseFromDB => {
        console.log("\naddTask - responseFromDB.data:", responseFromDB.data);
        dispatch({ type: GET_ALL_TASKS, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions axios addTask:", err);
      })
  }
}

export const editTask = (task) => {
  console.log("\nACTION: editTask:", task);
  return dispatch => {
    axios.put("/editTask", task)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_TASK, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editTask:", err);
      })
  }
}