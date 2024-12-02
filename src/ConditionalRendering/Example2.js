import React from 'react'
import Login from './Login'
import Logout from './Logout'

function Example2(props) {
 if(props.isloggedIn){
    return  <Login/>
 }
 else{
    return <Logout/>
 }
}

export default Example2
