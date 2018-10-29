import React, { createContext, useReducer } from "react";
import { TAB_TYPES } from "./util";
import { ACTION_TYPES } from "./util";

const initialState = {
  tab: TAB_TYPES.ALL,
  todos: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return { ...state, todos: [...state.todos, action.payload] };
    case ACTION_TYPES.REMOVE:
      let tmp = state.todos.slice();
      tmp.splice(action.payload, 1);
      return { ...state, todos: [...tmp] };
    case ACTION_TYPES.TOGGLE:
      return {
        ...state,
        todos: (state.todos[action.payload].isComplete = !state.todos[
          action.payload
        ].isComplete)
      };
    case ACTION_TYPES.CHANGE_TAB:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};

export const TodoContext = createContext();

export const ContextProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
