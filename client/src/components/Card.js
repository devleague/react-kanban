import React from 'react';

const Card = (props) => (
	<div data-id={props.id} className={'card ' + props.type}>
		<p><b>{props.title}</b></p>
		<p>Priority: {props.priority}</p>
		<p>Assigned By: {props.by}</p>
		<div className="card-bottom">
			<div className="card-menu">
				<div onClick={props.onEdit}>Edit</div>
				<div onClick={props.onDel}>Delete</div>
			</div>
			<div>
				<p>{props.to}</p>
			</div>
		</div>
	</div>
)

export default Card;
