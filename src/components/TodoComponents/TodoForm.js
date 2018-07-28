import React from 'react';

const TodoForm = props => {
    return (
    <form>
        <input type="text" placeholder="Enter Text" onChange={props.inputHandler} name="input" value={props.value} />
        <button onClick={props.addItem}>Add ToDo</button>
        <button>Clear Completed</button>
    </form>
    );
};

export default TodoForm;