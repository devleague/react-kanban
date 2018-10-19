import React, { Component } from 'react';
import { format } from 'path';

import { connect } from 'react-redux';
import { addItem } from '../actions/actions.js'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null, 
            body: null, 
            priority: null, 
            status: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('submitted', this.state)
        this.props.dispatch(addItem(this.state));
    }

    handleChange(e) {
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
                    <input onChange={this.handleChange} name="title" type="text"/>
                </label>    
                <label> Body:
                    <input onChange={this.handleChange} name="body" type="text" />
                </label>
                <label> Priority: 
                    <select onChange={this.handleChange} name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>    
                </label>
                <label>Status:
                    <select onChange={this.handleChange} name="status">
                        <option value="in-queue">In Queue</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>     
                    </select>
                </label> 
                <input type="submit" value="Submit"/>
            </form>    
        )
    }
}

export default connect()(Form)