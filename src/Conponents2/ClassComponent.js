import React from 'react'

class ClassComponent extends React.Component{
    render(){
        return(
            <>
            <h1>This is Class component</h1>
            <Child/>
            </>
        )
    }
}
class Child extends React.Component{
    render(){
        return(
            <>
            <h1>this Child Component</h1>
            </>
        )
    }
}

export default ClassComponent