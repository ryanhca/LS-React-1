import React from 'react';
import Todo from './Todo';

const TodoList = props => {
   return(
       <div className='todo-list'>
           {props.todos.map(task => (
               <Todo key={task.id} task={task} toggleTask= {props.toggleTask} />
           ))}
           <button className='clear-finished' onClick={props.clearFinished}>Clear Finished</button>
       </div>
   ); 
}

export default TodoList;