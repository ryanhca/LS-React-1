import React from 'react';
// eslint-disable-next-line
import Todo from './Todo';


const checked = (props) => {
    let propList = props.status.map(status => {
            return <div>{status}</div>;
        }
    )

}

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(todo => {
                return <div>{todo + checked(props)}</div>;
            })}
        </div>
    )
}

export default TodoList;

// Return an unordered list
// Inside the unordered list, embed a javascript expression (curly brackets).
// Inside the javascript expression, map the movies array
// The function inside map should take in two arguments, movie and i (for index).
// The function should return a list item, with a javascript expression movie (the same variable as map).
// The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.
