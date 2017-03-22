import React, {Component} from 'react';
import './board.css';
import Card from '../../components/Card';

// const cardAPI = 'http://127.0.0.1/api/card';

class Board extends Component {
	constructor() {
		super();
		this.state = {
			queueCards: [],
			progressCards: [],
			doneCards: []
		};
		['queue', 'progress', 'done'].map((type) => {
			return (_ => {
				let oReq = new XMLHttpRequest();
				oReq.addEventListener('load', () => {
					this.setState({
						[`${type}Cards`]: JSON.parse(oReq.response)
					});
				});
				oReq.open('GET', `/api/card/all/${type}-card`);
				oReq.send();
			})();
		});
	}
	onEdit = (event) => {
		// edit button
	}
	onDel = (event) => {
		// delete button
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
										title={title}
										type={type}
										priority={priority}
										by={by}
										to={to}
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
