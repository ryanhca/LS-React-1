import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [{text: 'todo'}, {text: 'hi'}],
      newTodo: {
        text: '',
        completed: false
      }
      // clicked: false
    };
  }

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // }
// this is when it is clicked, changes state to opposite whatever clicked is because !
// so when you click again it uncrosess like toggle
  handleInput = event => {
    this.setState({ newTodo: { text: event.target.value } });
  };

  // okay so I'd like some explanation here:
  // I'm seeing this addTodo method taking a parameter
  // called event, and yet when it is invoked on line 46
  // I'm not seeing it called with any parameters.
  // So what of this event parameter here? Special keyword? or wut?
  // setting it cleared every time you add an item to the todolist
  addTodo = event => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      todos: todoList,
      newTodo: {
        text: '',
        completed: false
      }
    });
  };

  render() {
    // const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    // ternary operator
    return (
      <div>
        {/* map is iterating through todos array
            map is assigning each todos item as todo parameter 
            map is assigning each todos index as i parameter 
            if todo.text is true(not an empty string)
            then render Todo class component from Todo.js
            pass value todo.text as props to todo
        */
          this.state.todos.map((todo, i) =>
          todo.text && <Todo todo={todo.text} key={i} />
        )}
        {/* The .map is iterating through each todo in the “ToDo” array and passes each element to the “ToDo.js” file as the variable “items”. */}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Add a new todo"
            value={this.state.newTodo.text}
          />
        </form>
      </div>
   );
  }
}




export default TodoList;