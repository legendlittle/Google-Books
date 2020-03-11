import React, { Component } from "react";
import { Input, Text, SubmitBtn } from "../Form";

class Books extends Component {
    state = {
        books: []
    };


render() {
    return (

        <div className='container'>
            <div className='jumbotron text-center text-danger bg-dark'>
                <h1>Google Books API</h1>
            </div>

            <h2> Search for a book!</h2>
            <form>
                <Input name='title' placeholder='Title'  />
                <Input name='author' placeholder='Author'  />
                <SubmitBtn> Submit</SubmitBtn>
            </form>
        </div>
    )
}
}

export default Books;