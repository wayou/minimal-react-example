import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        CLICK ME
      </button>{" "}
      {num}
    </div>
  );
}

ReactDOM.render(<Counter />, document.querySelector("#app"));
