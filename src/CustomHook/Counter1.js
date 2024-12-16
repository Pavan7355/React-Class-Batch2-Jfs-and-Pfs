import React from 'react'
import './counter.css'
import UseCustom from './UseCustom'
function Counter1() {
   const{count,increment,decrement,reset}=UseCustom(100)
  return (
    <div>
    
          <center><h1>Counter App 1</h1></center>
      <div className='container'>
<h2>The Counter Value is : {count}</h2>
<div>
<button className='btn1' onClick={increment}>Increment</button>
<button className='btn2'onClick={reset}>Reset</button>
<button className='btn3' onClick={decrement}>Decrement</button>
</div>
    </div>
    </div>
  )
}

export default Counter1
