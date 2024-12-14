import React from 'react'
import Component4 from './Component4'

function Component3({fname,username}) {
  return (
    <div>
       <div style={{height:"300px",width:"600px",
        boxShadow:"0px 0px 10px black",textAlign:"center"
      }}>
        <h1>Component 3</h1>
        <Component4 fname={fname}
        username={username}/>
      </div>
    </div>
  )
}

export default Component3
