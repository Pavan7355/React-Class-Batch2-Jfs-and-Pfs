import React from 'react'

function ChildComponent({click}) {
  return (
    <>
      <h4>Child Component</h4>
      <button onClick={click}>Click here</button>
    </>
  )
}

export default ChildComponent
