import React, { Component } from 'react';
import './TodoInput.scss';

class TodoInput extends Component {
	state = {
		inputItem: '',
		todoList: []
	};

	// input box에 값을 입력했을 때
	onChange = (e) => {
		this.setState({
			inputItem: e.target.value
		});
	};

	// input box에서 엔터('Enter')를 눌렀을 때
	handlerKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.onInsert();
		}
	};

	// '등록' 버튼을 눌렀을 때
	onInsert = () => {
		const new_item = this.state.inputItem;
		this.setState({
			inputItem: '',
			todoList: [ ...this.state.todoList, new_item ]
		});
	};

	// 렌더링
	render() {
		const todoList = this.state.todoList.map((item, index) => <p key={index}>{item}</p>);
		return (
			<div>
				<input
					type="text"
					value={this.state.inputItem}
					onChange={this.onChange}
					onKeyPress={this.handlerKeyPress}
					placeholder="할 일을 적어주세요."
				/>
				<button className="add-button" onClick={this.onInsert}>
					등록
				</button>
				{todoList}
			</div>
		);
	}
}

export default TodoInput;
