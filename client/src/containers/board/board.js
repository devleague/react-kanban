import React, {Component} from 'react';
import './board.css';
import Card from '../../components/Card';

import { connect } from 'react-redux';
import { addCard, updateCard, updateEditBuff, updateEditing, editCard } from '../../actions';

class Board extends Component {
	constructor() {
		super();
		this.reload();
	}
	reload() {
		let oReq = new XMLHttpRequest();
		oReq.addEventListener('load', _ => {
			let Cards = JSON.parse(oReq.response);
			Cards.forEach(({id, title, type, priority, by, to}) => {
				this.props.onAddCard(id, title, type, priority, by, to);
			});
		});
		oReq.open('GET', `/api/card/all`);
		oReq.send();
	}
	onEdit = ({id, title, type, priority, by, to}) => {
		return (event) => {
			if(this.props.editing === id) {
				let oReq = new XMLHttpRequest();
				oReq.addEventListener('load', _ => {
					let data = JSON.parse(oReq.response);
					let {id, title, type, priority, by, to} = data;
					this.props.onEditCard(id, title, type, priority, by, to);
				});
				oReq.open('PUT', `/api/card/edit/${id}`);
				oReq.setRequestHeader("Content-Type", "application/json");
				oReq.send(JSON.stringify(this.props.editBuff));
			}
			this.props.onUpdateEditBuff(id, title, type, priority, by, to);
			this.props.onUpdateEditing((this.props.editing===id)?null:id);
		}
	}
	onDel = (event) => {
		let ele = event.target.parentElement.parentElement.parentElement;
		let oReq = new XMLHttpRequest();
		oReq.addEventListener('load', _ => ele.remove());
		oReq.open('DELETE', `/api/card/delete/${ele.dataset.id}`);
		oReq.send();
	}
	change = (prop) => {
		return (event) => {
			let newEditBuff = this.props.editBuff;
			newEditBuff[prop] = event.target.value;
			let {id, title, type, priority, by, to} = newEditBuff;
			this.props.onUpdateEditBuff(id, title, type, priority, by, to);
		}
	}
	render() {
		return (
			<div className="Board">
				{['queue', 'progress', 'done'].map(type => {
					return (
						<div key={type} className={type}>
							<div className="board-title">
								{((type !== 'done') ? 'IN ' : '') + type.toUpperCase()}
							</div>
							{
								this.props.cards
									.filter(({type: cardType}) => cardType === `${type}-card`)
									.map(card => {
										const {id, title, type, priority, by, to} = card;
										return (<Card 
											key={id}
											id={id}
											title={title}
											type={type}
											priority={priority}
											by={by}
											to={to}
											editing={this.props.editing === id}
											onDel={this.onDel}
											onEdit={this.onEdit(card)}
											change={this.change}
										/>);
									})
							}
						</div>
					)
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		cards: state.cards,
		editing: state.editing,
		editBuff: state.editBuff
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAddCard: (id, title, type, priority, by, to) => {
			dispatch(addCard(id, title, type, priority, by, to));
		},
		onUpdateCard: (id, title, type, priority, by, to) => {
			dispatch(updateCard(id, title, type, priority, by, to));
		},
		onUpdateEditBuff: (id, title, type, priority, by, to) => {
			dispatch(updateEditBuff(id, title, type, priority, by, to));
		},
		onUpdateEditing: (id) => {
			dispatch(updateEditing(id));
		},
		onEditCard: (id, title, type, priority, by, to) => {
			dispatch(editCard(id, title, type, priority, by, to));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
