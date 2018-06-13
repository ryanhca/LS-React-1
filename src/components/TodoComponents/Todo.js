import React from 'react';

const Todo = props => {
  return (
      props.todos.map(todo => {
        return <li key={Date.now()}>{props.todo}</li>;
      })
  );
};

export default Todo;