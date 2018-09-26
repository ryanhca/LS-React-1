import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
	constructor() {
		super();
		
		this.state = {
			todos: [
				{
				 task: "Test",
				 id: 1234050,
				 completed: false
				}
			]
		}
	}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
		<h1>Todo List</h1>
        <TodoList list={this.state.todos} />
      </div>
    );
  }
}

export default App;
