import React from "react";

const TodoForm = props => {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter todo item"
        value={props.value}
        onChange={props.handleChange}
      />
      <div className="button" onClick={props.addTodo}>
        Add
      </div>
      <div className="button" onClick={props.clearCompleted}>Clear Complete</div>
    </div>
  );
};

export default TodoForm;
