import React from 'react'
import Login from './Login'

function Example5(props) {
  return (
    <div>
      {props.booleanValue &&<h1> welcome user</h1>}
    {props.booleanValue && <Login/>}
    </div>
  )
}

export default Example5
