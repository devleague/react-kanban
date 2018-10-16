import React, { Component } from 'react';

import './Container.css';

import initialItemsFromDB from '../db/database.db';
import InQueue from '../queue/Queue';
import InProgress from '../progress/Progress';
import Done from '../done/Done';


class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: initialItemsFromDB
        } 
    }

    render() {
        const { items } = this.state;

        return (
            <div className="Container">
                <div className="Queue-container">
                    <div className="Queue-title">
                        In Queue
                    </div>
                    <div className="Queue-items">
                        <InQueue items={items} />    
                    </div>    
                </div>        
                <div className="Progress-container">
                    <div className="Progress-title">
                        In Progress
                    </div>   
                    <div className="Progress-items">
                        <InProgress items={items} />
                    </div>    
                </div>
                <div className="Done-container">
                    <div className="Done-title">
                        Done
                    </div>
                    <div className="Done-items">
                        <Done items={items} />
                    </div>    
                </div>
            </div>
        )
    }
}

export default Container;