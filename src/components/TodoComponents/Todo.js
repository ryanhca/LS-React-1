import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="task-container">
            <h3 className="task-name">
                {props.task.taskName}
            <span className="task-timestamp">
                {props.task.timeStamp}
            </span>
            </h3>
        </div>
    )
}

export default Todo;