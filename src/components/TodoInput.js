import React from 'react';

const TodoInput = props => {
    return (
        <div>
            <input value={props.todo} onChange={props.onTodoInput} />
            <button onClick={props.onTodoSubmit}>Submit</button>
        </div>
    );
};

export default TodoInput;
