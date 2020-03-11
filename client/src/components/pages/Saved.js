import React, { Component } from "react";
import { Input, SubmitBtn } from "../Form";

class Saved extends Component {
    state = {
        books: []
    };


    render() {
        return (
           
            <div className='container'>
               
                <div className='jumbotron text-center text-danger bg-dark'>
                    <h1>Saved Books</h1>
                </div>

                <h2> Manage your Saved Books</h2>
                <form>
                    <Input name='title' placeholder='Title' />
                    <Input name='author' placeholder='Author' />
                    <SubmitBtn> Submit</SubmitBtn>
                </form>
            </div>
        )
    }
}

export default Saved;