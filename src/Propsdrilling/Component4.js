import React from 'react'

function Component4({fname,username}) {
  return (
    <div>
      <div style={{height:"200px",width:"500px",
        boxShadow:"0px 0px 10px black",textAlign:"center"
      }}>
        <h1>Component 4</h1>
        <h3>I am {fname}</h3>
        <h5>the username is {username}</h5>
      </div> 
    </div>
  )
}

export default Component4
