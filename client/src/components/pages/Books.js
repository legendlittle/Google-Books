import React, { Component } from "react";
import { Input, SubmitBtn } from "../Form";
import API from "../../utils/API"


class Books extends Component {
    state = {
        title: '',
        authors: [],
        description: '',
        image: '',
        link: ''


    };

    submit = e => {
        e.preventDefault();
        API.search(this.state.title)
            .then(res =>
                this.setState({
                    authors: res.data.items[0].volumeInfo.authors,
                    description: res.data.items[0].volumeInfo.description,
                    image: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
                    link: res.data.items[0].volumeInfo.infoLink
                })



            )
    }

    change = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    save = (e) => {
        e.preventDefault();

        API.saveBook({
            title: this.state.title,
            author: this.state.authors.toString(),
            description: this.state.description,
            image: this.state.image,
            link: this.state.link
        })
    }

    render() {
        return (



            <div className='container'>

                <div className='jumbotron text-center text-danger bg-dark'>
                    <h1>Google Books API</h1>
                </div>

                <h2> Search for a book!</h2>
                <form>
                    <Input onChange={this.change} name='title' placeholder='Title' value={this.state.title} />

                    <SubmitBtn onClick={this.submit}> Submit</SubmitBtn>
                </form>

                <div>
                    <h2>Book Info</h2>

                    <h4>Title: {this.state.title}</h4>
                    <h4>Authors: {this.state.authors}</h4>
                    <p>Description: {this.state.description}</p>
                    <img src={this.state.image} alt='Book Cover'></img>
                    <br></br>
                    <h4><a href={this.state.link}>Google Books Link</a></h4>
                    <SubmitBtn onClick={this.save}> Save this Book!</SubmitBtn>
                </div>
            </div>

        )
    }
}

export default Books;