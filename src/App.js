import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="result">
        Результат: <span>0</span>
      </div>

      <div className="buttons">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default App;
