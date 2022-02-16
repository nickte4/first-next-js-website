import React from "react";

export default function Todo(props) {
  const { todo, idx, removeTodo } = props;
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{todo.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{todo.due}</h6>
        <p className="card-text">{todo.details}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            removeTodo(idx);
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
