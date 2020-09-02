import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <div className="result">
        Результат: <span data-cy="result">{count}</span>
      </div>

      <div className="buttons">
        <button data-cy="plus" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button data-cy="minus" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button data-cy="reset" onClick={() => setCount(0)}>
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default App;
