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
	}
	getQueue = () => {
		let oReq = new XMLHttpRequest();
		oReq.addEventListener('load', (event) => {
			this.setState({
				queueCards: JSON.parse(oReq.response)
			});
		});
		oReq.open('GET', '/api/card/queue');
		oReq.send();
	}
	getProgress = () => {
		let oReq = new XMLHttpRequest();
		oReq.addEventListener('load', (event) => {
			this.setState({
				progressCards: JSON.parse(oReq.response)
			});
		});
		oReq.open('GET', '/api/card/progress');
		oReq.send();
	}
	getDone = () => {
		let oReq = new XMLHttpRequest();
		oReq.addEventListener('load', (event) => {
			this.setState({
				doneCards: JSON.parse(oReq.response)
			});
		});
		oReq.open('GET', '/api/card/done');
		oReq.send();
	}
	onEdit = (event) => {
		// edit button
	}
	onDel = (event) => {
		// delete button
	}
	render() {
		if(this.state.queueCards.length === 0) this.getQueue();
		if(this.state.progressCards.length === 0) this.getProgress();
		if(this.state.doneCards.length === 0) this.getDone();
		return (
			<div className="Board">
				<div className="queue">
					<div className="board-title">IN QUEUE</div>
					{
						this.state.queueCards.map(card => {
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
				<div className="progress">
					<div className="board-title">IN PROGRESS</div>
					{
						this.state.progressCards.map(card => {
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
				<div className="done">
					<div className="board-title">DONE</div>
					{
						this.state.doneCards.map(card => {
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
			</div>
		);
	}
}

export default Board;
