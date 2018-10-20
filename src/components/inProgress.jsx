import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
// import helpers from './helpers/helpers.jsx';


/* Syles */

const pCatStyle = {
  fontFamily: 'Geneva',
  fontSize: '16px',
  textAlign: 'center',
  color: 'solid black',
  marginBottom: '-20px'
};

const qeueuCardStyles = {
  display: 'grid',
  marginBottom: '55px',
  padding: '10px',
  backgroundColor: '#9aadb6',
  border: '2px solid black',
  borderRadius: '15px 1px 15px 15px',
  boxShadow: '5px 10px 5px #888888'
};

const lowPriorityColor = {
  backgroundColor: '#9aadb6',
  color: '#d612cf',
  borderRadius: '10px 10px 1px 1px',
  paddingTop: '15px',
  marginTop: '-34px',
  marginLeft: '320px',
  borderTop: '2px solid black',
  borderLeft: '2px solid black',
  borderRight: '2px solid black',
  borderBottom: 'none'
};

const mediumPriorityColor = {
  backgroundColor: '#9aadb6',
  color: 'darkblue',
  borderRadius: '10px 10px 1px 1px',
  paddingTop: '15px',
  marginTop: '-34px',
  marginLeft: '320px',
  borderTop: '2px solid black',
  borderLeft: '2px solid black',
  borderRight: '2px solid black',
  borderBottom: 'none'
};

const highPriorityColor = {
  backgroundColor: '#9aadb6',
  color: 'red',
  borderRadius: '10px 10px 1px 1px',
  paddingTop: '15px',
  marginTop: '-34px',
  marginLeft: '320px',
  borderTop: '2px solid black',
  borderLeft: '2px solid black',
  borderRight: '2px solid black',
  borderBottom: 'none'
}

const taskEditStyle = {
  fontFamily: 'Geneva',
  fontSize: '10px',
  textAlign: 'right',
  backgroundColor: '#9aadb6',
  border: 'none'
};

/* End Syles */


class InProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carditems: [],
      hasItems: true
    }
  }

addItemToInventory = (item) => {
  // addItemToFakeXHR(item)
  //   .then( items => {
  //     if (items) {
  //       this.setState({ items })
  //     }
  //   })
  
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
      <p style={pCatStyle}>IN PROGRESS</p>  
      <div style={{padding: '40px'}}>
        <div>
        <ItemList path="/carditems" carditems={this.state.carditems}/>

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
      card_id={carditem.card_id} 
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
    return <div style={lowPriorityColor}>Low</div>
  } else if (priorityVar === 555) {
      return <p style={mediumPriorityColor}>Medium</p>
    } else if (priorityVar === 999) {
        return <p style={highPriorityColor}>High</p>
      }
}

// function theStatus() {
//   let statusVar = props.status_id;

//   if (statusVar === 10) {
//     return "Queue"
//   } else if (statusVar === 50) {
//       return "In Progress"
//     } else if (statusVar === 90) {
//         return "Done"
//       }
// }

// function userCreatedAssigned() {
//   let userVar = props.created_by || props.assigned_to;

//   if (userVar === props.user_id) {
//     return props.first_name && ' ' && props.last_name
//   } 
// }


/* End Helpers */

// const dateString = Date(props.created_at).toString();
const date = Date(props.created_at);
const formattedDate = Moment(date).format("LL");
/* Do not display if status is not 'Done' */
  if (props.status_id !== 50) {
    return null
  } else { 
    return  <div style={qeueuCardStyles}>
    <h3 align="center" style={{marginTop: '-15px'}}> {thePriority()} </h3>
    <h3 align="center" style={{marginTop: '-5px', marginBottom: '4px', backgroundColor: '#b4b4b4'}}>{props.title} </h3>
    <div>
    <font style={{fontWeight: 'bold'}}>Task ID:</font>  {props.card_id}
    </div>  
    <div>
    <font style={{fontWeight: 'bold'}}>Assigned To:</font> {`${props.assigned_to.first_name} ${props.assigned_to.last_name}`}
    </div>
    <br />
    <br />
    <div>
    <font style={{fontWeight: 'bold'}}>Description:</font> {props.body}
    </div>
    <br />
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
      <div style={{display: 'grid'}}>
      <font style={{fontWeight: 'bold'}}>Created:</font> {formattedDate} 
      </div>
      <div style={{display: 'grid'}}>
      <font style={{fontWeight: 'bold'}}>By:</font> {`${props.created_by.first_name} ${props.created_by.last_name}`}  
      </div>
    </div>
    {/* <br />
    Status: {theStatus()} <br /> */}
    <button style={taskEditStyle} id="edit" type="button">Edit</button>
    {/* <button id="delete" type="button">Delete</button> */}
    <button style={taskEditStyle} onClick={ () => props.removeItemTask(props.card_id)} id="delete" type="button">Delete</button>
   </div>

  }
}


export default InProgress;
