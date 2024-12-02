import React from 'react'
import Login from './Login'
import Logout from './Logout'

function Example4(pros) {
 return (pros.isloggedIn?<Login/>:<Logout/>)
}

export default Example4
