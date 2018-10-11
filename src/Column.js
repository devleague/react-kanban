import React, { Component } from 'react';

class Column extends Component {
    render () {
        return (
            <div>Tasks</div>
        )
    }    
}

export default Column;

function TODO(props) {
    return props.items.filter(item => item.status === 'ToDo').map( item => <div key={item.id} onClick={this.showDescription.bind(this)}>{item.name}{this.state.isHidden && <div>{item.description}</div>}</div>)
    }
    
    // function DOING(props) {
    //   return props.items.filter(item => item.status === 'Doing').map( item => <div key={item.id} onClick={ () => props.getItemById(item.id)}>{item.name}</div>)
    // }
    
    // function DONE(props) {
    //   return props.items.filter(item => item.status === 'Done').map( item => <div key={item.id} onClick={ () => props.getItemById(item.id)}>{item.name}
    //   <div>{item.description}</div>
    //   </div>)
    // }