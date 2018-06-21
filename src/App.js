import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Holy Crap!</h1>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoItems={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;

/*{this.state.todos[0].task}*/