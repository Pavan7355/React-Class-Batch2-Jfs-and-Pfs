import React from 'react'

function Example1(props) {
    const{name,age,city,isStudent}=props
  return (
    <>
      <h1>My name is {name}</h1>
      <p>I am {age} years old</p>
      <h2>I am from {city}</h2>
      <h3>{isStudent?"i am student":"not a student"}</h3>
    </>
  )
}

export default Example1
