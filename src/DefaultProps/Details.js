import React from 'react'

function Details(props) {
  return (
    <>
     <h1>My name is {props.name}</h1>
     <p>My age is {props.age}</p>
     <h2>I am From {props.city}</h2> 
    </>
  )
}
Details.defaultProps={
    name:"stranger",
    age:"not avaiable",
    city:"data not found"
}

export default Details
