import React from 'react'

function Example3() {
    const student=[{
        id:1,
        name:"Raj",
        city:"Bangalore",
        skill:"React Js"
    },{
        id:2,
        name:"Riya",
        city:"Mysore",
       skill:"Angular Js"
    },{
        id:3,
        name:"Sachin",
        city:"Kolar",
        skill:"Javascript"
    }]
   let studentlist= student.map((element,index)=>{
        return(
            <>
            <dt>Student {element.id}</dt>
     <dd>I am {element.name}, I am form {element.city}
                ,I know {element.skill} Skill </dd>
            </>
        )
    })
  return (
    <>
      <h1>Definition List</h1>
      <dl>
        {studentlist}
      </dl>
      <h1>Neasted List</h1>
      <ol type='1'>
<li>Java Full stack</li>
<ul type='circle'>
<li>Core Java</li>
<li>Webtechnology</li>
<li>My SQL</li>
<li>Spring Boot</li>
</ul>
<li>Python Full stack</li>
<ul type="square">
<li>Core Python</li>
<li>Webtechnology</li>
<li>My SQL</li>
<li>Django and Rest API</li>
</ul>
<li>Mern Stack</li>
<ul type="disc">
<li>React Js</li>
<li>Node JS</li>
<li>Express Js</li>
<li>Mongo DB</li>
</ul>
      </ol>
    </>
  )
}

export default Example3
