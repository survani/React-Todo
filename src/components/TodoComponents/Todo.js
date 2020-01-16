import React from "react";

const Todo = props => {
  return (
    <div
      onClick={event => props.toggleCompleted(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p className="task">{props.task.task}</p>
    </div>
  );
};

export default Todo;
