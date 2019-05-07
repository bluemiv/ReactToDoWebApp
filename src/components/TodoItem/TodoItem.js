import React, { Component } from 'react';
import './TodoItem.scss';

class TodoItem extends Component {
	render() {
		const { done, children, onToggle, onRemove } = this.props;
		return (
			<div className="todo-item-group">
				<input className="todo-item-checkbox" type="checkbox" checked={done} onClick={onToggle} readOnly />
				<div className={`todo-item-text ${done ? 'done' : ''}`}>{children}</div>
				<div className="todo-item-remove" onClick={onRemove}>
					지우기
				</div>
			</div>
		);
	}
}

export default TodoItem;
