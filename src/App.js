/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return(
    <div class="App">
      <h1>Paint bucket</h1>
      <div class='Container'>
        <div class='Glass'>Glass</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        <div>
          <button 
            class='decrement'
            onClick={() => setCount(count - 1)}
            >
            -
          </button>
          
          <button
            class='increment'
            onClick={() => setCount(count + 1)}
            >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;