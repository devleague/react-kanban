import React, {Component} from 'react';
import './board.css';
import Card from '../../components/Card';

class Board extends Component {
	onEdit = (event) => {
		// edit button
	}
	onDel = (event) => {
		// delete button
	}
	render() {
		return (
			<div className="Board">
				<div className="queue">
					<div className="board-title">IN QUEUE</div>
					<Card 
						id="1"
						task="Make Better Styles."
						type="queue-card"
						priority="Medium"
						by="Jon"
						to="Renee"
						onEdit={this.onEdit}
						onDel={this.onDel}
					/>
					<Card 
						id="1"
						task="Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. "
						type="queue-card"
						priority="Medium"
						by="Jon"
						to="Renee"
						onEdit={this.onEdit}
						onDel={this.onDel}
					/>
				</div>
				<div className="progress">
					<div className="board-title">IN PROGRESS</div>
					<Card 
						id="1"
						task="Make Better Styles."
						type="progress-card"
						priority="Medium"
						by="Jon"
						to="Renee"
						onEdit={this.onEdit}
						onDel={this.onDel}
					/>
				</div>
				<div className="done">
					<div className="board-title">DONE</div>
					<Card 
						id="1"
						task="Make Better Styles."
						type="done-card"
						priority="Medium"
						by="Jon"
						to="Renee"
						onEdit={this.onEdit}
						onDel={this.onDel}
					/>
					<Card 
						id="1"
						task="Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. "
						type="done-card"
						priority="Medium"
						by="Jon"
						to="Renee"
						onEdit={this.onEdit}
						onDel={this.onDel}
					/>
				</div>
			</div>
		);
	}
}

export default Board;
