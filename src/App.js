import React, { Component } from 'react';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor
  constructor(props) {
    super();
    this.state = {
      currentList: []
    }
  }

  // Methods

  // Render
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
