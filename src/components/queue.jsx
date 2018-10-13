import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


/* Syles */

const catDivStyle = {
  display: 'grid',
  // padding: '100px',
  // height: '900px'
  borderRight: '1px solid gray',
  borderLeft: '1px solid white',
  borderBottom: '1px solid white',
};

const pCatStyle = {
  fontFamily: 'Geneva',
  fontSize: '16px',
  textAlign: 'center',
  color: 'gray'
};

const qeueuCardStyles = {
  display: 'grid',
  padding: '10px',
  backgroundColor: '#ffbc3f',
  border: '2px solid black',
  borderRadius: '10px',
  boxShadow: '5px 10px 5px #888888'
};

const items = {
  borderRadius: '10px'
};

/* End Syles */


class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
          // {
          //   id: 1,
          //   description: 'Make Better Styles.',
          //   priority: 'Medium',
          //   by: 'Jon',
          //   to: 'Renee'
          // },
          // {
          //   id: 2,
          //   description: 'Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
          //   priority: 'Medium',
          //   by: 'Jon',
          //   to: 'Renee'
          // }
      ],
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
  .get('/items')
  .then( items => {
    console.log("items", items)
    this.setState({items: items.data})
  })
  .catch( err => {
    console.log('err', err)
  })
}

renderItemList() {
  if (this.state.hasItems) {
    return <ItemList items={this.state.items}/>
  } else {
    return null
  }
}

render() {    
const Section = () => (
  <div style={catDivStyle}>
  <p style={pCatStyle}>IN QUEUE</p>
    <div style={{padding: '40px'}}>
        <div style={qeueuCardStyles}>
          <Router>
            <div>
                <Link className="App-title" to="/items">Items</Link>
              <Route path="/items" component={ () => <ItemList items={this.state.items}/>}/>
            </div>
          </Router>
          {this.state.items.map( item => <div style={items}>{item.description}</div> )}
          {this.state.items.map( item => <div style={items}>{item.priority}</div> )}
          {this.state.items.map( item => <div style={items}>{item.by}</div> )}
          {this.state.items.map( item => <div style={items}>{item.to}</div> )}
          <ItemForm />
          <br />
          {this.state.hasItems ? <ItemList items={this.state.items}/> : null}
            {this.renderItemList()}
            <ItemList items={this.state.items}/>
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
  
  return props.items.map( item => <Item key={item.id} description={item.description}/>)
}

function Item(props) {
  console.log('props', props)
  // function navigateTo() {
    
  // }
  return <div >{props.description}</div>
}

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      description: null,
      priority: null,
      by: null,
      to: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMITTED!!!!', this.state)
    this.props.addItem(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()

    const { description, value } = e.target
    this.setState({
      [description] : value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label> Description:
          <input onChange={this.handleChange} type="text" name="description"/>
        </label> <br />
        <label> Priority:
          <select onChange={this.handleChange} name="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label> <br />
        <label> By:
          <input onChange={this.handleChange} type="text" name="by"/>
        </label> <br />
        <label> To:
          <input onChange={this.handleChange} type="text" name="to"/>
        </label> <br />

        <input type="submit"/>
      </form>
    )
  }

}

export default Queue;