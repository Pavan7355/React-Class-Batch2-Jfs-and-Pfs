import React, { useEffect } from 'react'
import { useState } from 'react'
function DataFetcher() {

    const[data,setData]=useState(null)
useEffect(()=>{
//side effects
async function FetchData() {
    try{
      let respone= await fetch('https://fakestoreapi.com/products')
        let result= await respone.json()
        setData(result)
    }
    catch{
        console.log("you got an error")
    }
}
FetchData() 
    return ()=>{
        console.log("your code is clean")
    }
},[])
  return (
    <div>
<h1>Data Fetch Demo</h1>
{data?(
    <div>
        <pre>{JSON.stringify(data,null,20)}</pre>
        </div>
):(<p>Loading.....</p>)}
    </div>
  )
}

export default DataFetcher
