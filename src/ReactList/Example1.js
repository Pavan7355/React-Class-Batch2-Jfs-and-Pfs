import React from 'react'

function Example1() {
  return (
    <>
      <h1>Ordered List</h1>
      <ol type='a'>
<li>Benz</li>
<li>BMW</li>
<li>Audi</li>
<li>Range Rover</li>
      </ol>
      <h1>Unordered List</h1>
      <ul type="square">
<li>Raj</li>
<li>Riya</li>
<li>Viart</li>
<li>Sachin</li>
      </ul>
      <h1>Definition list</h1>
      <dl>
        <dt>Student 1</dt>
        <dd>I am Raj , I am From Bangalore,I know
            React skill
        </dd>
        <dt>Student 2</dt>
        <dd>I am Riya , I am From Mysore,I know
            Angular skill
        </dd>
        <dt>Student 3</dt>
        <dd>I am Sachin , I am From Kolar,I know
            Javascript skill
        </dd>
      </dl>
      <h1>Neasted List</h1>
      <ol type='1'>
<li>Java Full stack</li>
<ul type='circle'>
<li>Core Java</li>
<li>Webtechnology</li>
<li>My SQL</li>
<li>J2EE and JDBC</li>
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

export default Example1
