/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-access-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Paint bucket</h1>
      <div className="Container">
        <button className="decrement" onClick={() => setCount(count - 1)}>
          -
        </button>
        {count}
        <div className="Glass">
        {count >= 1 && <div className="Nivel-1">1</div>}
        {count >= 2 && <div className="Nivel-2">2</div>}
        {count >= 3 && <div className="Nivel-3">3</div>}
        {count >= 4 && <div className="Nivel-4">4</div>}
        </div>

        <button className="increment" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
