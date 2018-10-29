import React from "react";

import Counter from "./Components/Counter/Counter";
import TodoApp from "./Components/TodoApp/TodoApp";

export default function App() {
  return (
    <div className="app">
      <Counter />
      <hr />
      <TodoApp />
    </div>
  );
}
