import React, { Component } from "react";
import { DeleteBtn } from "../Form";
import { ListItem, List } from "../List"
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
            .then(res => {this.setState({
                books: res.data
            })
       
        }
            )
    }

   

    remove = (id) => {
        API.deleteBook(id).then(res => {
            
            this.loadSaved()
        }
        )
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

                                <p>
                                    {book.title} by {book.author}
                                    <br>
                                    </br>
                                    <a href={book.link}>Read Now!</a>
                                </p>


                                <DeleteBtn onClick={() => this.remove(book._id)}> Delete</DeleteBtn>
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