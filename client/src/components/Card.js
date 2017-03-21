import React from 'react';

const Card = (props) => (
	<div className={'card ' + props.type}>
		<p><b>{props.task}</b></p>
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