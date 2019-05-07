import React from 'react';
import './App.scss';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
	return (
		<PageTemplate>
			<TodoInput />
			<TodoList />
		</PageTemplate>
	);
};

export default App;
