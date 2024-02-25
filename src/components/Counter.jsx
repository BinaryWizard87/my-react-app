import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const inCrement = () => {
    setCount(count - 1);
  };

  const deCrement = () => {
    setCount(count + 1);
  };

  const reSet = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={deCrement}>
          +
        </button>
        <button className="counter-button" onClick={inCrement}>
          -
        </button>
        <button className="counter-button" onClick={reSet}>
          Reset <span class="material-symbols-outlined">counter_0</span>
        </button>
      </div>
    </>
  );
}

export default Counter;
