//All of your application data will be stored here
//All of your handler functions should live here

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
let data = [];

class App extends React.Component {
  //store your state in this component.
  constructor(){
    super();
    this.state = {
      task: "",
      id: 1,
      completed: false,
    }
  }

  //handle input takes the input provide in the box and changes the state to reflex that text
  handleInput = (event) => {
    this.setState({
      task: event.target.value,
    });
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      task: this.state.task,
      id: parseInt(this.state.id)+1,
    })
    data.push(this.state)
    console.log(data)
    console.log(typeof data)
  }
  removeCompleted(){
    console.log("cleared")
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <TodoList {...this.state} />
      // <div className="form-container">
      //     <h1>Todo List: MVP</h1>
      //     <input onChange={this.handleInput} />
      //     <button onClick={this.addTodo}>Add Todo</button>
      //     <button onClick={this.removeCompleted}>Clear Completed</button>
      // </div>
    );
  }
}

export default App;
