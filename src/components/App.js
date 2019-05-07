import React, { Component } from 'react';
import './App.scss';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
	state = {
		input: '',
		todos: [ { id: 0, text: '테스트', done: true }, { id: 1, text: '테스트2', done: false } ]
	};

	id = 1;
	getId = () => {
		return ++this.id;
	};

	handleChange = (e) => {
		this.setState({
			input: e.target.value
		});
	};

	handleClick = () => {
		if (this.state.input !== '') {
			const { input, todos } = this.state;
			const todo = {
				id: this.getId(),
				text: input,
				done: false
			};
			this.setState({
				todos: [ ...todos, todo ],
				input: ''
			});
		}
	};

	handleToggle = (id) => {
		const { todos } = this.state;
		const index = todos.findIndex((todo) => todo.id === id);

		const toggled = {
			...todos[index],
			done: !todos[index].done
		};

		this.setState({
			todos: [ ...todos.slice(0, index), toggled, ...todos.slice(index + 1, todos.length) ]
		});
	};

	handleRemove = (id) => {
		const { todos } = this.state;
		const index = todos.findIndex((todo) => todo.id === id);

		this.setState({
			todos: [ ...todos.slice(0, index), ...todos.slice(index + 1, todos.length) ]
		});
	};

	render() {
		const { input, todos } = this.state;
		const { handleChange, handleClick, handleToggle, handleRemove } = this;
		return (
			<PageTemplate>
				<TodoInput onChange={handleChange} onInsert={handleClick} value={input} />
				<TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
			</PageTemplate>
		);
	}
}

export default App;
