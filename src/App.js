import React, {useState} from 'react'

import './App.css'


function App() {
  const [count, setCount] =useState(0)

  let increment = () =>{
    setCount(count + 1)
    
  }

  let decrement = () =>{
    setCount(count - 1)
  }
 return (
    <div className='counter'>
      <div className='buttons'>
      <button className='btn' onClick={increment}>+</button>
        <button className='btn' onClick={decrement}>-</button>
      </div>
        
        <p className='score'> Counter {count}</p>
    </div>

 );
}

export default App;
