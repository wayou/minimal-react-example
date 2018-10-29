import React, { useContext, useRef } from "react";
import { TodoContext } from "../../TodoContext";
import { ACTION_TYPES } from "../../util";

export default function Action() {
  const { dispatch } = useContext(TodoContext);
  const inputElement = useRef(null);

  function add() {
    const content = inputElement.current.value.trim();
    if (!content) {
      return;
    }
    dispatch({
      type: ACTION_TYPES.ADD,
      payload: {
        id: new Date().getTime(),
        content,
        isComplete: false
      }
    });
  }

  return (
    <>
      <input type="text" ref={inputElement} />
      <button
        className="btn btn-primary"
        onClick={() => {
          add();
        }}
      >
        ADD
      </button>
    </>
  );
}
