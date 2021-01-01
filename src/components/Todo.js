import React from 'react';


const Todo = (props) => {
    // console.log("Props", props)
    return(
        <div>
            <h4>{props.task.task}</h4>
            <p>{props.task.completed}</p>
        </div>
    )
}


export default Todo;