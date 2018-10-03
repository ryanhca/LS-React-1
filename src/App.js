import React from 'react';
import './App.css';
import ToDoList from './components/TodoComponents/TodoList';
import Form from './components/TodoComponents/TodoForm';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: 'Complete'
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: 'Incomplete'
        }
      ],
      inputText: '',
      newTask: '',
      color: 'angry'
    }
  }
  changeHandler = event => {
    event.preventDefault();
    this.setState({ newTask: event.target.value })
  }

  addNewTask = event => {
    event.preventDefault();
    if (this.state.newTask === '') {
      alert('Please add a new task')
    } else {

      this.setState({
        list: [
          ...this.state.list,
          {
            task: this.state.newTask,
            id: Date.now(),
            completed: 'Incomplete'
          }
        ],
        newTask: ''
      })
    }
  }


  render() {
    return (
      <div className="App">
        {/* list of tasks */}
        <div className="todolist">
          <ToDoList
            list={this.state.list}
          />
        </div>

        {/* input field and button */}
        <div className="todoform">
          <Form
            type="text"
            inputText={this.state.inputText}
            placeholder="Add A New Task"
            addNewTask={this.addNewTask}
            onClick={this.changeHandler}
            changeHandler={this.changeHandler}
            value={this.state.inputText}
          />
        </div>
      </div>
    );
  }
}

export default App;
