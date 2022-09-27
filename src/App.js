/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return(
    <div className="App">
      <h1>Paint bucket</h1>
      <div className='Container'>
        <div className='Glass'></div>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>

          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count - 1)}>
            Click me
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;