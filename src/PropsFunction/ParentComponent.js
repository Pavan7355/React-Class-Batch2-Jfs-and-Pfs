import React from 'react'
import ChildComponent from './ChildComponent'
//how to pass the function as props to another component?
function ParentComponent() {
  let handleClick=()=>{
        alert("hello good afternoon")
    }
  return (
    <>
      <h1>Parent Component</h1>
      <ChildComponent click={handleClick}/>
    </>
  )
}

export default ParentComponent
