import React from 'react';

const MenuBtn = (props) => (
	<div className="menu-btn" onClick={props.onClick}>
		{props.text}
	</div>
);

export default MenuBtn;
