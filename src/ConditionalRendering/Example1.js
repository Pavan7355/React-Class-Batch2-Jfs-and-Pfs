//condtionally rendering elements in react

import React from 'react'

function Example1(pros) {
 if(pros.isloggedIn){
    return <h1>Welcome user {pros.name} </h1>
 }
 else{
    return <h1>Please log in again!!</h1>
 }
}

export default Example1
