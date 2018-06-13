import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.state = {
      toDos: [
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
      ],
      todo:'Add To Do'
    }
  }

  changeTodo = event => {
    this.setState({todo: event.target.value});
    console.log(this.state.todo)
  }

  addTodo = props => {
    props.preventDefault();
    const newToDos = this.state.toDos.slice();
    newToDos.push({task: this.state.todo, completed: false, id: Date.now()});
    this.setState({toDos: newToDos, todo: ''});
  }

  render() {
    return (
      <div>
        <h1>My to do list</h1>
        <TodoList items={this.state.toDos} />
        <TodoForm changeEvent={this.changeTodo} handler={this.addTodo} displayText={this.state.todo} />
      </div>
    );
  }
}

export default App;
