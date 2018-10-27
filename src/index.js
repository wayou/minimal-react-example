import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function Counter() {
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

ReactDOM.render(<Counter />, document.querySelector('#app'));
