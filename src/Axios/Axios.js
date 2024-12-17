import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Axios() {
    const[data,setData]=useState(null)
    const[error,setError]=useState(false)
    console.log(data)
    useEffect(()=>{
        async function FetchData() {
            try{
                let response=await axios.get('https://fakestoreapi.com/products/1')
                setData(response)
                setError(false)
            }
       
catch{
    setError(true)
}

        }
        FetchData()
    },[])
  return (
    <div>
<h1>API Data</h1>
{error && <p>Error occured</p>}
{data?(
    <div>
        <pre>{JSON.stringify(data,null,20)}</pre>
        </div>
):(<p>Loading.....</p>)}
    </div>
  )
}

export default Axios
