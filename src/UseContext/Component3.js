import React, { useContext } from 'react'
import Component4 from './Component4'
import { contextData } from './Component1'

function Component3() {
    let fname=useContext(contextData)
  return (
    <div>
       <div style={{height:"400px",width:"700px",
        boxShadow:"0px 0px 10px black",textAlign:"center"
      }}>
        <h1>Component 3</h1>
        <h3>My name is {fname[0]}</h3>
<Component4/>
      </div>
    </div>
  )
}

export default Component3
