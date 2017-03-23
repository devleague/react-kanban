import React, {Component} from 'react';
import './board.css';
import Card from '../../components/Card';

class Board extends Component {
	constructor() {
		super();
		this.state = {
			queueCards: [],
			progressCards: [],
			doneCards: [],
			editing: null,
			editBuff: {}
		};
		this.reload();
	}
	reload() {
		['queue', 'progress', 'done'].map((type) => {
			return (_ => {
				let oReq = new XMLHttpRequest();
				oReq.addEventListener('load', _ => {
					this.setState({
						[`${type}Cards`]: JSON.parse(oReq.response)
					});
				});
				oReq.open('GET', `/api/card/all/${type}-card`);
				oReq.send();
			})();
		});
	}
	onEdit = ({id, title, type, priority, by, to}) => {
		return (event) => {
			if(this.state.editing === id) {
				let oReq = new XMLHttpRequest();
				oReq.addEventListener('load', _ => this.reload());
				oReq.open('PUT', `/api/card/edit/${id}`);
				oReq.setRequestHeader("Content-Type", "application/json");
				oReq.send(JSON.stringify(this.state.editBuff));
			}
			this.setState({
				editBuff: {title, type, priority, by, to},
				editing: (this.state.editing === id) ? null : id
			});
		}
	}
	onDel = (event) => {
		let ele = event.target.parentElement.parentElement.parentElement;
		let oReq = new XMLHttpRequest();
		oReq.addEventListener('load', _ => ele.remove());
		oReq.open('DELETE', `/api/card/delete/${ele.dataset.id}`);
		oReq.send();
	}
	cTitle = (event) => {
		let newEditBuff = this.state.editBuff;
		newEditBuff.title = event.target.value;
		this.setState({editBuff: newEditBuff});
	}
	cType = (event) => {
		let newEditBuff = this.state.editBuff;
		newEditBuff.type = event.target.value;
		this.setState({editBuff: newEditBuff});
	}
	cPriority = (event) => {
		let newEditBuff = this.state.editBuff;
		newEditBuff.priority = event.target.value;
		this.setState({editBuff: newEditBuff});
	}
	cBy = (event) => {
		let newEditBuff = this.state.editBuff;
		newEditBuff.by = event.target.value;
		this.setState({editBuff: newEditBuff});
	}
	cTo = (event) => {
		let newEditBuff = this.state.editBuff;
		newEditBuff.to = event.target.value;
		this.setState({editBuff: newEditBuff});
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
								this.state[`${type}Cards`].map(card => {
									const {id, title, type, priority, by, to} = card;
									return (<Card 
										key={id}
										id={id}
										title={title}
										type={type}
										priority={priority}
										by={by}
										to={to}
										editing={this.state.editing === id}
										onDel={this.onDel}
										onEdit={this.onEdit(card)}
										cTitle={this.cTitle}
										cType={this.cType}
										cPriority={this.cPriority}
										cBy={this.cBy}
										cTo={this.cTo}
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

export default Board;
