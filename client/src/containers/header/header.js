import React, {Component} from 'react';
import './header.css';
import MenuBtn from '../../components/MenuBtn';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="logo">KANBAN</div>
				<div className="menu">
					<MenuBtn
						text="+ NEW TASK"
					/>
				</div>
			</div>
		);
	}
}

export default Header;
