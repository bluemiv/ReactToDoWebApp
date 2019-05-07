import React from 'react';
import './TodoInput.scss';

const TodoInput = ({ value, onChange, onInsert }) => {
	/**
     * Todo input 박스 컴포넌트
     * @param {func} onChange input box에 값을 입력했을 때
     * @param {func} onInsert '등록' 버튼을 눌렀을 때
     */

	// input box에서 엔터('Enter')를 눌렀을 때
	const handlerKeyPress = (e) => {
		if (e.key === 'Enter') {
			onInsert();
		}
	};

	// 렌더링
	return (
		<div className="add-input-group">
			<input
				type="text"
				className="add-input"
				onChange={onChange}
				onKeyPress={handlerKeyPress}
				placeholder="할 일을 적어주세요."
			/>
			<button className="add-button" onClick={onInsert}>
				등록
			</button>
		</div>
	);
};

export default TodoInput;
