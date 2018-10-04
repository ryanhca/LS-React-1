import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div>
            {props.todoData.map(item => {
                return <Todo task={item.task} id={item.id} completed={item.completed}/>
            })}
        </div>
    )
}




export default TodoList;



// {props.todoData.map(item => {
//     return <h1 onClick={props.onClickToggle}>{item.task}</h1>
// })}