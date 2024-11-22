import React from "react";

class BookList extends React.Component{
    render(){
        return(
            <>
            <h1>The Book name is{this.props.name}</h1>
            <h2>The author of the book is{this.props.author}</h2>
            </>
        )
    }
}

export default BookList