import React from 'react';
import Todo from "../TodoComponents/Todo";

const TodoList = props => {

        return (
          <div>
            {props.chores.map(item => {
              return  <Todo chore={item}  key={item.id}/>
            })}
          </div>
        );

};

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList;