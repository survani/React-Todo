// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
        
      ))}
      <button className="clear-button" onClick={props.clearCompleted}>Clear Task</button>
    </div>
  );
};

export default TodoList;
