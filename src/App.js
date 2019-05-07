import React from 'react';
import './App.scss';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';

const App = () => {
	return (
		<PageTemplate>
			<TodoInput />
		</PageTemplate>
	);
};

export default App;
