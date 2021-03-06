// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

 const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <Todo todo={todo} select={props.select}/>
      ))}
    </ul>
  );
};
 export default TodoList;