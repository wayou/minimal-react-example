import React, { useState, useEffect } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `num:${num}`;
  });

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
