import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
 

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: ""
    }
  }
  
  changeHandler = event => {
    this.setState({
      inputText: event.target.value
    })
  }
   
  submitHandler = event => {
    event.preventDefault();
     this.props.List(this.state.inputText)
    this.setState({inputText: ""}) 
   }
  
   render(){
    return(
      <form onSubmit = {this.submitHandler}>
        <input type = "text" placeholder = "Enter Task" value = {this.state.inputText} onChange = {this.changeHandler}></input>
        <button type = "submit" >Add Task</button>
        <button type = "button">Clear Completed</button>
      </form>
    );
  }
};
         
 export default TodoForm;