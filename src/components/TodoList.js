import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state={
            todos: [],
            newTodo: ''
        };
        // this.handleTodoInput = this.handleTodoInput.bind(this);
        // this.addTodo = this.addTodo.bind(this);
        // this.toggleState = this.toggleState.bind(this);

    } 
    handleTodoInput = (event) => {
        this.setState({newTodo: event.target.value})
    } 
    addTodo = (event) => {
        event.preventDefault();
        const todoList = this.state.todos;
        const newItem = {
            text: this.state.newTodo,
            completed: false,
        }
    

        this.setState({
            todos: [ ...todoList, newItem ],
            newTodo: ''
        })
    }
    toggleState = () => {
        console.log(this);
        console.log(this.completed);
        this.completed = !this.completed;
        console.log(this.completed);
        
      }
    
    render(){
        return(
            <div>
                {this.state.todos.map((todosItems, i) => <Todo key={i} todo={todosItems} toggle={this.toggleState}/>)}
                <form onSubmit={this.addTodo}>
                    <input type='text' 
                    onChange={this.handleTodoInput} 
                    placeholder='Tell me what you need to do' 
                    value={this.state.newTodo}/>
                </form>
            </div>
        )
    }
}

export default TodoList;