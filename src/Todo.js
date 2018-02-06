import React from 'react';
import { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      text: this.props.text,
      completed: false,
    };
  }
  
  render() {
    return (
      <li key={this.state.key} onClick={this.toggleCompleted}>{this.state.completed ? <del>{this.state.text}</del> : this.state.text}</li>
    );
  };

  toggleCompleted = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };
}

export default Todo;
