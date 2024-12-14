import React, { createContext, useState } from 'react'
import Component2 from './Component2'

 export let contextData=createContext()
function Component1() {
   const[name,setName]= useState('Raj')
var imageurl="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/04/13/virat-kohli.jpg"
  return (
    <div>
      <div style={{height:"600px",width:"900px",
        boxShadow:"0px 0px 10px black",textAlign:"center"
      }}>
        <h1>Component 1</h1> 
        <h2>My name is {name}</h2>
   <contextData.Provider value={[name,imageurl]}>
        <Component2/>
        </contextData.Provider>
      
      </div>
    </div>
  )
}

export default Component1
