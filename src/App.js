import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

let todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean kennel',
    id: 43242314234,
    completed: true
  }
];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: todoList
    }
  }

  handleChange = (e) => {
    console.log("Pushed to list")
    todoList.push({
      task: e,
      id: Date.now(),
      completed: false
    })
  }
  
  
  render() {
    const addTask = () => {
      console.log("Task added");
    }
    console.log(this.state.list);
    return (
      <>
      <div>
        <h2>To Do</h2>
        <form onSubmit={this.handleChange}>
          <input type="text" placeholder="new task" />
          <input type="button" onClick={addTask} value="Submit" />
        </form>
      </div>
      <TodoList array={this.state.list}/>
      </>
    );
    
  }
}

export default App;
