import React, { Component } from 'react';

import './Container.css';

import initialItemsFromDB from '../db/database.db';
import InQueue from '../queue/Queue';
import InProgress from '../progress/Progress';


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
                    <InQueue items={items}/>    
                </div>        
                <div className="Progress-container">
                    <div className="Progress-title">
                        In Progress
                    </div>    
                    <InProgress items={items} />
                </div>
                <div className="Done-container">
                    <div className="Done-title">
                        Done
                    </div>
                    <Done items={items} />
                </div>
            </div>
        )
    }
}

export default Container;