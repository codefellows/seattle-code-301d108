import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    // Make a GET request to the server's /books route
    axios.get(SERVER_URL + '/books')
      .then(response => {
        // Store the book data in the application state
        this.setState({ books: response.data });
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }

  renderBooks() {
    // Check if there are more than 0 books stored in the application state
    if (this.state.books.length > 0) {
      // Render Bootstrap Carousel with books
      return (
        <Carousel>
          {this.state.books.map(book => (
            <Carousel.Item key={book.id}>
              <img
                className="d-block w-100"
                src={book.imageUrl}
                alt={book.title}
              />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    } else {
      // Render message when no books are available
      return <p>Book collection is empty.</p>;
    }
  }

  render() {
    return (
      <div>
        {this.renderBooks()}
      </div>
    );
  }
}

export default BestBooks;
