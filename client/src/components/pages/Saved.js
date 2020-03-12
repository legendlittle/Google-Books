import React, { Component } from "react";
import { SubmitBtn } from "../Form";
import {ListItem, List} from "../List"
import API from "../../utils/API"
class Saved extends Component {
    state = {
        books: []
        
    };

    componentDidMount() {
        this.loadSaved();
    }

    loadSaved = () => {
        //findAll from mongoose database
        API.getBooks()
    }

    save = data => {
        API.saveBook(data)
    }

    remove = (id) => {
        API.deleteBook(id)
    }
    render() {
        return (

            <div className='container'>

                <div className='jumbotron text-center text-danger bg-dark'>
                    <h1>Saved Books</h1>
                </div>

                <h2> Manage your Saved Books</h2>

                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem key={book._id}>
                                <a href={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}
                                    </strong>
                                </a>
                                <SubmitBtn onClick={this.remove}> Delete</SubmitBtn>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}



            </div>
        )
    }
}

export default Saved;