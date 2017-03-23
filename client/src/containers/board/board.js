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
			editing: null
		};
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
	onEdit = (id) => {
		// edit button
		return (event) => {
			this.setState({
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
										onEdit={this.onEdit}
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
