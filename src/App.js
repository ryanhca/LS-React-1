import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: [],
			inputText: ''
		};
	}

	addToList = event => {
		event.preventDefault();
		let newArray = this.state.todoList;
		let newTodo = {
			task: this.state.inputText,
			id: Date.now(),
			completed: false
		};
		newArray.push(newTodo);
		this.setState({
			todoList: newArray,
			inputText: ''
		});
	};

	changeUserInput = event => {
		this.setState({ inputText: event.target.value });
	};

	render() {
		return (
			<div>
				<TodoForm
					addToList={this.addToList}
					userInput={this.state.inputText}
					changeUserInput={this.changeUserInput}
					inputText={this.state.inputText}
        />
        <TodoList
        list={this.state.todoList}
        
        />
			</div>
		);
	}
}

export default App;
