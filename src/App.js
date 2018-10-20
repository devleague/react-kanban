import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      items: []
    };
    this.deleteItemFromList = this.deleteItemFromList.bind(this);
    this.editItemInList = this.editItemInList.bind(this);
  }

//make axios post with correct form data so that server can receive and create a new item in db
//in same route in backend, return all items (in server)

componentDidMount() {
  axios
    .get('/items')
    .then( items => {
      // console.log('items DB', items)
      this.setState({items: items.data})
    })
    .catch( err => {
      console.log('err')
    })
}

  addItemToList = (item) => {
    console.log('addItemToList item', item)
    axios
    .post('/newCard', item)
    .then( cardData => {
      console.log('card data from server', cardData)
      this.setState({ items: cardData.data})
    })
    .catch( err => {
      console.log('err', err)
    })
    // let array = this.state.items;
    // array.push(item);
    // this.setState( {
      //   items: array
      // })
    }
    
    deleteItemFromList = (id) => {
      axios
      .delete(`/delete/${id}`)
      .then( deleteResult => {
        console.log('deleteResult', deleteResult)
        this.setState({ items: deleteResult.data})
      })
      console.log('delete attempt')
    }

    editItemInList = (editItem, id) => {
      console.log('edit item id', id);
      console.log('editItem', editItem)
      axios
      .put(`/edit/${id}`, editItem)
      .then(editServerData => {
        this.setState({ items: editServerData.data })
      })
      .catch(err => {
        console.log("Error w/axios PUT/editTask:", err);
      })
    }


    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>Kan-Ban</h1> */} {/*why does this hide the logo?*/}
          <img src={logo} className="App-logo" alt="logo" />
          <div>Kanban</div>
          <br/>
        </header>
          <ItemForm addItem={this.addItemToList}/>

      <div id="bigContainer">
        <div className="cardContainer">
          <h1>In queue</h1>
          <div className="cardDiv">
            <ItemListInQueue items={this.state.items} deleteItemFromList={this.deleteItemFromList} editItemInList={this.editItemInList}/>
          </div>
        </div>
        <div className="cardContainer">
          <h1>In progress</h1>
          <div className="cardDiv">
            <ItemListInProgress items={this.state.items} deleteItemFromList={this.deleteItemFromList} editItemInList={this.editItemInList}/>
          </div>
        </div>
        <div className="cardContainer">
          <h1>Done</h1>
          <div className="cardDiv">
            <ItemListDone items={this.state.items} deleteItemFromList={this.deleteItemFromList} editItemInList={this.editItemInList}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

function ItemListInQueue(props) {
  // return props.items.map(item => <Item title={item.title} body={item.body} priority={item.priority} key={item.id}/>); //looks like props from Item(props) takes the properties of title/body/priority and puts it into a new object, then passes that object down to Item(props)
  // console.log('props', props)
  return props.items.filter(item => item.status === 'Todo')
  .map(item => <Item title={item.title} body={item.body} priority={item.priority} key={item.id} id={item.id} deleteItemFromList={props.deleteItemFromList} editItemInList={props.editItemInList}/>);
}

function ItemListInProgress(props) {
  return props.items.filter(item => item.status === 'Doing')
  .map(item => <Item title={item.title} body={item.body} priority={item.priority} key={item.id} id={item.id} deleteItemFromList={props.deleteItemFromList} editItemInList={props.editItemInList}/>);
}

function ItemListDone(props) {
  return props.items.filter(item => item.status === 'Done')
  .map(item => <Item title={item.title} body={item.body} priority={item.priority} key={item.id} id={item.id} deleteItemFromList={props.deleteItemFromList} editItemInList={props.editItemInList}/>);
}


function Item(props) {
  return (
    <div className="cards" key={props.id}>
      <h1>{props.title}</h1> <br/> {props.body} <br/> <p>Priority: {props.priority}</p> 
      <button type="button" onClick={ () => {props.deleteItemFromList(props.id)}}>Delete</button>
      <ItemForm2 editItem={props.editItemInList} id={props.id}/>
    </div>
  );
}

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      body: null,
      status: null,
      priority: null,
      createdBy: null,
      assignedTo: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!', this.state)
    this.props.addItem(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()
    // if (e.target.name === 'title') {   
    //   console.log('What field?', e.target.name)
    //   console.log('Value of field?', e.target.value)
    //   this.setState({'title': e.target.value}, function() {
    //     console.log('this.state after updating form: title', this.state)
    //   })
    // } else if (e.target.name === 'body') {
    //   console.log('What field?', e.target.name)
    //   console.log('Value of field?', e.target.value)
    //   this.setState({'body': e.target.value}, function() {
    //     console.log('this.state after updating form: body', this.state)
    //   })
    // } else if (e.target.name === 'priority') {
    //   console.log('What field?', e.target.name)
    //   console.log('Value of field?', e.target.value)
    //   this.setState({'priority': e.target.value}, function() {
    //     console.log('this.state after updating form: priority', this.state)
    //   })
    // }

    const { name, value } = e.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input onChange={this.handleChange} type='text' name='title'></input>
        </label>
        <label> Body:
          <input onChange={this.handleChange} type='text' name='body'></input>
        </label>
        <label> Created By:
          <input onChange={this.handleChange} type='text' name='createdBy'></input>
        </label>
        <label> Assigned To:
          <input onChange={this.handleChange} type='text' name='assignedTo'></input>
        </label>
        <label> Status:
          <select onChange={this.handleChange} type='text' name='status'>
            <option value=''selected disabled hidden>Selections</option>
            <option value='Todo'>Todo</option>
            <option value='Doing'>Doing</option>
            <option value='Done'>Done</option>
          </select>
        </label>
        <label> Priority:
          <select onChange={this.handleChange} type='text' name='priority'>
            <option value2='low'>low</option>
            <option value2=''selected disabled hidden>Selections</option>
            <option value2='medium'>medium</option>
            <option value2='high'>high</option>
          </select>
        </label>
        <input type='submit'></input>
      </form>
    )
  }
}

class ItemForm2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      body: null,
      status: null,
      priority: null,
      createdBy: null,
      assignedTo: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!', this.state)
    this.props.editItem(this.state, this.props.id)
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input onChange={this.handleChange} type='text' name='title'></input>
        </label>
        <label> Body:
          <input onChange={this.handleChange} type='text' name='body'></input>
        </label>
        <label> Created By:
          <input onChange={this.handleChange} type='text' name='createdBy'></input>
        </label>
        <label> Assigned To:
          <input onChange={this.handleChange} type='text' name='assignedTo'></input>
        </label>
        <label> Status:
          <select onChange={this.handleChange} type='text' name='status'>
            <option value=''selected disabled hidden>Selections</option>
            <option value='Todo'>Todo</option>
            <option value='Doing'>Doing</option>
            <option value='Done'>Done</option>
          </select>
        </label>
        <label> Priority:
          <select onChange={this.handleChange} type='text' name='priority'>
            <option value2='low'>low</option>
            <option value2=''selected disabled hidden>Selections</option>
            <option value2='medium'>medium</option>
            <option value2='high'>high</option>
          </select>
        </label>
        <button type='submit'>Edit</button>
      </form>
    )
  }
}


export default App;
