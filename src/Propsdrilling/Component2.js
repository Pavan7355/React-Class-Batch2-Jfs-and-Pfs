import React from 'react'
import Component3 from './Component3'

function Component2({fname,username}) {
  return (
    <div>
       <div style={{height:"400px",width:"700px",
        boxShadow:"0px 0px 10px black",textAlign:"center"
      }}>
        <h1>Component 2</h1>
        <Component3 fname={fname}
        username={username}/>
      </div>
    </div>
  )
}

export default Component2
