import React from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import ToDo from "./Todo";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and
  //any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDoData: [
        {
          task: "meet girl",
          id: Date.now(),
          completed: flase
        },
        {
          task: "Ask out on a date",
          id: Date.now(),
          completed: flase
        },
        {
          task: "Go on the date",
          id: Date.now(),
          completed: false
        },
        {
          task: "get engaged",
          id: Date.now(),
          completed: flase
        },
        {
          task: "get married",
          id: Date.now(),
          completed: false
        },
        {
          task: "determine we are both assassins",
          id: Date.now(),
          completed: false
        },
        {
          task: "start the plot of the movie Mr. and Mrs. Smith",
          id: Date.now(),
          completed: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;

{
  /* 
<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />.
 */
}
