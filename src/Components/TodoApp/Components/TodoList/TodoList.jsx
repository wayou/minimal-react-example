import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../TodoContext";

export default function TodoList() {
  const { state } = useContext(TodoContext);
  return (
    <div className="todo-list">
      {state.todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} index={index} />;
      })}
    </div>
  );
}
