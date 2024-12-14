import React, { useContext } from 'react'
import { contextData } from './Component1'
function Component4() {
        let data=useContext(contextData)
  return (
    <div>
       <div style={{height:"300px",width:"600px",
        boxShadow:"0px 0px 10px black",textAlign:"center"
      }}>
        <h1>Component 4</h1>
        <h3>My name is {data[0]} </h3>
<img src={data[1]} height={50} width={50}/>
      </div>
    </div>
  )
}

export default Component4
