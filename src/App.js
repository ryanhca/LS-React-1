import React from 'react';

import TodoList from './components/TodoList';

const todo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo
    };
  };

  addTodo = todoName => {
    this.setState({
      todo: [...this.state.todo, {task: todoName, id: Date.now(), completed: false}]
    });
  };

  render() {
    return (
      <div>
        <h2>My Personal To-Do List</h2>
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
