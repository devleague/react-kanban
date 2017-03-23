import React from 'react';

const Card = (props) => {
	return (!props.editing) ? (
		<div className={'card ' + props.type} data-id={props.id}>
				<p><b>{props.title}</b></p>
				<p>Priority: {props.priority}</p>
				<p>Assigned By: {props.by}</p>
				<div className="card-bottom">
					<div className="card-menu">
						<div onClick={props.onEdit(props.id)}>Edit</div>
						<div onClick={props.onDel}>Delete</div>
					</div>
					<div>
						<p>{props.to}</p>
					</div>
				</div>
		</div>
	) : (
		<div className="editCover">
			<div className={'card editCard ' + props.type} data-id={props.id}>
				<div className="card-bottom">
					<div className="card-menu">
						<div onClick={props.onEdit(props.id)}>Edit</div>
						<div onClick={props.onDel}>Delete</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
