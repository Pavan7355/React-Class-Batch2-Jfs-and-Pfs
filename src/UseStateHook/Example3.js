import React from 'react'
import { useState } from 'react'
function Example3() {
    const[image,setImage]=useState('https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png')
 let handleClick=()=>{
setImage('https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png')
 }
 
    return (
    <div>
      <center>
        <img src={image} height="400" width="400"/>
        <br/><br/>
        <button style={{margin:"20px"}} onClick={handleClick}>React Image</button>
        <button onClick={()=>setImage('https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png'

        )}>Angular Image</button>
      </center>
    </div>
  )
}

export default Example3
