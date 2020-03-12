import axios from "axios";

export default {
    search: function(q) {
        return (axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + q))
    },

    getBooks: function() {
        return (axios.get('/api/books'));
    },

    saveBook: function(data) {
        return (axios.post('/api/books', data));
    },

    deleteBook: function(id) {
        return (axios.delete('/api/books/' + id));
    }
};