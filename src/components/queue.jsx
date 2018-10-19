import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import helpers from './helpers/helpers.jsx';
import ItemForm from './newTask.jsx';



/* Syles */

const pCatStyle = {
  fontFamily: 'Geneva',
  fontSize: '16px',
  textAlign: 'center',
  color: 'gray'
};

const qeueuCardStyles = {
  display: 'grid',
  marginBottom: '25px',
  padding: '10px',
  backgroundColor: '#ffbc3f',
  border: '2px solid black',
  borderRadius: '10px',
  boxShadow: '5px 10px 5px #888888'
};

/* End Syles */


class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carditems: [],
      hasItems: true
    }
  }

// removeItemTask = (item) => {

//   axios
//     .put('/delete', item)
//     .then(item => {
//       console.log('RMFI log', item)
//     })
//     .catch(err => {
//       console.log('delete error: ', err)
//     })
// }  

addItemTask = (getNewTask) => {
  axios
  .post('/newtask', getNewTask)
      .then(itemsData => {
        console.log("\nitemsData.data:", itemsData.data);
        this.setState({ itemsData: itemsData.data })
      })
      .catch(err => {
        console.log("ERROR", err);
      })  
}

componentDidMount() {
  // getItemsFromFakeXHR()
  //   .then( items => {
  //     this.setState({ items })
  //   }, function() {
  //     console.log('this.state updated', this.state)
  //   })
  axios
  .get('/carditems')
  .then( carditems => {
    console.log("items", carditems)
    this.setState({carditems: carditems.data})
  })
  .catch( err => {
    console.log('err', err)
  })
}

renderItemList() {
  if (this.state.hasItems) {
    return <ItemList carditems={this.state.carditems}/>
  } else {
    return <div><p> Error </p></div>
  }
};

render() {    
const Section = () => (
  <div>
  <p style={pCatStyle}>IN QUEUE</p>
    <div style={{padding: '40px'}}>
        <div>
          <ItemList path="/carditems" carditems={this.state.carditems}/><br />
          <Router>
            <div>
                <Link className="App-title" to="/carditems">Items</Link>
              <Route path="/carditems" component={ () => <ItemList items={this.state.items}/>}/>
                <Link to="/newtask">
                  <button id="newTask" type="button">+ NEW TASK</button>
                </Link>
                <Route path="/newtask" component={() => <ItemForm addItemTask={this.addItemTask} />} />
                </div>
          </Router>
          {/* <ItemForm /> */}
        </div>
    </div>
  </div>
);

return (
    <div>
      <Section />
    </div>
    );
  }
}

function ItemList(props) {
  
  return props.carditems.map( carditem => 
    <Item 
      key={carditem.card_id} 
      title={carditem.title} 
      body={carditem.body}
      priority_id={carditem.priority_id}
      status_id={carditem.status_id}
      created_by={carditem.created_by}
      assigned_to={carditem.assigned_to}
      />)
}

function Item(props) {
  console.log('props', props)

/* Helpers */  
function thePriority() {
  let priorityVar = props.priority_id;

  if (priorityVar === 111) {
    return "Low"
  } else if (priorityVar === 555) {
      return "Medium"
    } else if (priorityVar === 999) {
        return "High"
      }
}

function theStatus() {
  let statusVar = props.status_id;

  if (statusVar === 10) {
    return "Queue"
  } else if (statusVar === 50) {
      return "In Progress"
    } else if (statusVar === 90) {
        return "Done"
      }
}

/* End Helpers */

/* Do not display if status is not 'Done' */
  if (props.status_id !== 10) {
    return null
  } else { 
  return  <div style={qeueuCardStyles}>
          <h3 align="center">{props.title} </h3>
          <p>Description:{props.body}</p>
          Priority: {thePriority()} <br />
          Status: {theStatus()} <br />
          Created by: {props.created_by} <br />
          Assigned to: {props.assigned_to} <br />

         </div>
        }
}  


export default Queue;