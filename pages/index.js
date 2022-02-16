import Todo from "../components/Todo";
import CreateTodo from "../components/CreateTodo";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const removeTodo = (idx) => {
    let curTodos = todos;
    curTodos.splice(idx, 1);
    setTodos([...curTodos]);
  };

  return (
    <div>
      <h1 className="text-primary text-center">Week 5 Todo App</h1>
      <div className="container">
        {todos.map((todo, idx) => {
          return (
            <Todo todo={todo} idx={idx} removeTodo={removeTodo} key={idx} />
          );
        })}
        <CreateTodo addTodo={addTodo} />
      </div>
    </div>
  );
}
