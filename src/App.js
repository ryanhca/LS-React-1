import React from 'react';
import Input from './components/Input.js';
import Todo from './components/Todo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      toDos: ["hello"]
    };
  }
  render() {
    return (<div>
      <h2>Todo App</h2>
      <Input/>
      <Todo/>
    </div>)
  }
};

export default App;
