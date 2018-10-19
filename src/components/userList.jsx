import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import helpers from './helpers/helpers.jsx';
import ItemForm from './newTask.jsx';
import Delete from './delete.jsx';



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
      usernames: [],
      hasItems: true
    }
  }

removeItemTask = (item) => {

    axios
      .put('/delete', item)
      .then(item => {
        console.log('RMFI log', item)
      })
      .catch(err => {
        console.log('delete error: ', err)
      })

  }  

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
  .get('/usernames')
  .then( usernames => {
    console.log("items", usernames)
    this.setState({usernames: usernames.data})
  })
  .catch( err => {
    console.log('err', err)
  })

}

renderUserList() {
  if (this.state.hasItems) {
    return <UserList usernames={this.state.usernames} />
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
          <UserList path="/usernames" usernames={this.state.usernames}/>
          <Router>
            <div>
                <Link className="App-title" to="/carditems">Items</Link>
              <Route path="/items" component={ () => <ItemList items={this.state.items}/>}/>

                <Link to="/newtask">
                  <button id="newTask" type="button">+ NEW TASK</button>
                </Link>
                <Route path="/newtask" component={() => <ItemForm addItemTask={this.addItemTask} />} />
                <Route path="/delete" component={() => <Delete removeItemTask={this.removeItemTask} />} />
                <button onClick={this.handleClick} className='deleteBtn'>DELETE</button>
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

function UserList(props) {
  
  return props.usernames.map( usernames =>     
    <UserAssignedCreated
      user_id={usernames.user_id}
      first_name={usernames.first_name}
      last_name={usernames.last_name}
      email={usernames.email}
     />)
}

// function createdAssigned(props) {

//   let cardItemList = props.carditems.map( carditem => 
//     <Item 
//       key={carditem.card_id} 
//       title={carditem.title} 
//       body={carditem.body}
//       priority_id={carditem.priority_id}
//       status_id={carditem.status_id}
//       created_by={carditem.created_by}
//       assigned_to={carditem.assigned_to}
//       />)
  
//   let userItemList = props.usernames.map( usernames =>     
//     <UserAssignedCreated
//       user_id={usernames.user_id}
//       first_name={usernames.first_name}
//       last_name={usernames.last_name}
//       email={usernames.email}
//       />)
      
//   let userFirstName = cardItemList.created_by || cardItemList.assigned_to
//   let userLasttName = cardItemList.created_by || cardItemList.assigned_to 

//   if (userFirstName === props.user_id) {
//     return userItemList.first_name
//   } else if (userLasttName === props.user_id) {
//     return userItemList.last_name
//   }
// }

function UserAssignedCreated(props) {

  return <div style={qeueuCardStyles}>
        Created by: {props.first_name} {props.last_name} {props.email} <br />
        Assigned to: {props.first_name} {props.last_name} {props.email} <br />
        </div>
}  

export default Queue;