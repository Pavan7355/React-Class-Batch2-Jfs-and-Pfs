import React, { useState } from 'react'
import './example5.css'

function Example5() {
    const[profiledata,setProfileData]=useState({
        imageURL:'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=',
        name:"Aditya Verma",
        email:"adityaverma@gmail.com",city:"Delhi"
    })
    const UpdateRiya=()=>{
setProfileData({...profiledata,name:"Riya Verma",
    imageURL:'https://img.freepik.com/premium-photo/business-woman-entrepreneur-working-office-professional-employee-workplace-young-beautiful-secretary-girl_265223-28262.jpg?w=2000',
    email:'riyaverma@gmail.com'
})
    }
  const UpdateAditya=()=>{
setProfileData({
    ...profiledata,
    imageURL:'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=',
    name:"Aditya Verma",
    email:"adityaverma@gmail.com"
})
    }
  return (
    <div>
    <center>
        <h1>Profile Compoent</h1>
    </center>
    <div className='profileCard'>
<div className='left'>
    <img src={profiledata.imageURL}
    height="100%" width="100%"/>
</div>
<div className='right'>
<dl>
    <dt><b>Name</b></dt>
    <dd>{profiledata.name}</dd>
    <dt><b>Email</b></dt>
    <dd>{profiledata.email}</dd>
    <dt><b>City</b></dt>
    <dd>{profiledata.city}</dd>
    <dt><b>Description</b></dt>
    <dd>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta</dd>
</dl>
<button className='btn' onClick={UpdateAditya}>Aditya</button>
<button className='btn' onClick={UpdateRiya}>Riya</button>
</div>
    </div>
    </div>
  )
}

export default Example5

