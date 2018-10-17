import React from 'react';
// import Item from './Item.jsx';
// import ItemForm from './ItemForm.jsx';

import { connect } from 'react-redux';

const Inventory = (props) => {
    console.log('props in inventory component', props)
    return (
        <>
            {props.items.map( item => <Item key={item.id} name={item.name}/>)}
            <ItemForm/>
        </>
    )
}

const mapReduxStoreStateToTheComponentProps = state => {
    return {
        items: state,
        lol: 'omgIjustEnteredAPropInThisComponent'
    }
}

export default connect(mapReduxStoreStateToTheComponentProps)(Inventory)