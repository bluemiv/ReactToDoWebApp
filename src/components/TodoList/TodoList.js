import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
	render() {
		return (
			<div>
				<TodoItem done>테스트1</TodoItem>
				<TodoItem>테스트2</TodoItem>
			</div>
		);
	}
}

export default TodoList;
