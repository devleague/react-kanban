import React, {Component} from 'react';
import './board.css';

class Board extends Component {
	render() {
		return (
			<div className="Board">
				<div className="queue">
					<div className="board-title">IN QUEUE</div>
				</div>
				<div className="progress">
					<div className="board-title">IN PROGRESS</div>
				</div>
				<div className="done">
					<div className="board-title">DONE</div>
				</div>
			</div>
		);
	}
}

export default Board;
