import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    let company="wipro"
    let expyear="3 years"
  return (
    <>
      <ChildComponent name="Sachin" age="27" 
      city="mysore"  company={company} exp={expyear}/>
      <ChildComponent name="Raj" age="30" 
      city="Mangalore" company={company} exp={expyear}/>
    </>
  )
}

export default ParentComponent
