// TODO: use hook to do form validation

import React, { useEffect, useContext } from "react";
import TodoList from "./Components/TodoList/TodoList";
import Tabs from "./Components/Tabs/Tabs";
import "./TodoApp.css";
import { ContextProvider, TodoContext } from "./TodoContext";
import { TAB_TYPES } from "./util";
import Action from "./Components/Action/Action";

export default function TodoApp() {
  const { state } = useContext(TodoContext);

  useEffect(() => {
    document.title = `TODOS(${state.todos.length})`;
  });

  function getTodos(type) {
    switch (type) {
      case TAB_TYPES.ALL:
        return state.todos;
      case TAB_TYPES.COMPLETE:
        return state.todos.filter(todo => todo.isComplete);
      case TAB_TYPES.INCOMPLETE:
        return state.todos.filter(todo => !todo.isComplete);
      default:
        return `unknown type`;
    }
  }

  return (
    <ContextProvider>
      <div className="todo-app">
        <h1>TODO LIST</h1>
        <Tabs todos={state.todos} />
        <Action />
        <TodoList todos={getTodos(state.tab)} />
      </div>
    </ContextProvider>
  );
}
