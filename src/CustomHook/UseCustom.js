import React, { useState } from "react";


const UseCustom=(intialvalue = 0)=>{
const[count,setCount]=useState(intialvalue)
const increment=()=>setCount(count+1)
const decrement=()=>setCount(count-1)
const reset=()=>setCount(0)
return {count,increment,decrement,reset}
}

export default UseCustom