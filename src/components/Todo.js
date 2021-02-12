import React from 'react'

const  Todo = props =>  {

    return (
        <div className='d-flex justify-content-center'>
        {props.list.map((item, idx) => (
            <div
            className='d-flex justify-content-center'
              onClick={() => props.toggleDone(props.list[idx].id)}
              key={idx}
              style={{
                border: ".1rem solid black",
                cursor: "pointer",
                margin: "2rem 0",
                textDecoration: props.list.complete && 'line-through',
                backgroundColor: props.list.complete && 'black',
                opacity: props.list.complete && '0.4',
                boxShadow: props.list.complete && '0 0 1rem lime', 
                borderRadius: '10px'
              }}
            >
              <p>{props.list[idx].task}</p>
            </div>
          ))}
      
        <p>{props.name}</p>
      </div>)
};

export default Todo