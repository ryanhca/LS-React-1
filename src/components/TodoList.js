import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodoItem: '',
            todos: []
        };
    }

    buttonAddTodo = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    buttonSubmitTodo = () => {
        const { todos } = this.state;
        todos.push(this.state.newTodoItem);
        this.setState({ todos, newTodoItem: "" });
    };
}