import React from "react";

const Todo = props => {
  return (
    <div
      onClick={e => props.toggleCompleted(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
