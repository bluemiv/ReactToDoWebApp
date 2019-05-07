import React from 'react';
import './App.scss';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';

const App = () => {
	return (
		<PageTemplate>
			<TodoInput />
		</PageTemplate>
	);
};

export default App;
