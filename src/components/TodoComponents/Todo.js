//<Todo /> is a component that takes in the todo data and displays the task to the screen.
import React from 'react';
import './Todo.css';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strike: false,
    };
  }

  clickHandler = () => {
    let toggle = !this.state.strike;
    this.setState({ strike: toggle });
    let task = this.props.task;
    task.completed = toggle;
  };

  render() {
    return !this.state.strike ? (
      <li onClick={this.clickHandler}>{`${this.props.task.task}`}</li>
    ) : (
      <li onClick={this.clickHandler} className="strike">{`${
        this.props.task.task
      }`}</li>
    );
  }
}

export default ToDo;
