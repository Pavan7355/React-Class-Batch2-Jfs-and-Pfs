import React from 'react'
import './counter.css'
import UseCustom from './UseCustom'
function Counter2() {
    const{count,increment,decrement,reset}=UseCustom(500)

  return (
    <div>
       <div>
    
    <center><h1>Counter App 2</h1></center>
<div className='container'>
<h2>The Counter Value is : {count}</h2>
<div>
<button className='btn1' onClick={increment}>Increment</button>
<button className='btn2' onClick={reset}>Reset</button>
<button className='btn3' onClick={decrement}>Decrement</button>
</div>
</div>
</div>
    </div>
  )
}

export default Counter2
