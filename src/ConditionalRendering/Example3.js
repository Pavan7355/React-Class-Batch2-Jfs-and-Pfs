import React from 'react'

function Example3(props) {
 const welcomeMSg=<h1 style={{color:"green",fontSize:"x-large",
    textAlign:"center"
 }}>Welcome user </h1>
 const loginMSg=<h1 style={{color:"red",fontSize:"x-large",
    textAlign:"center"
 }}>Please Login!! </h1>

 return (props.isloggedIn? welcomeMSg:loginMSg)
}

export default Example3
