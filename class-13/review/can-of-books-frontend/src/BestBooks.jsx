import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './BestBooks.css'; // Import custom CSS file

const SERVER_URL=import.meta.env.VITE_SERVER_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  // Function to fetch books data from the server
  fetchBooks = () => {
    axios
      .get(SERVER_URL + '/books')
      .then(response => {
        // Update state with fetched books data and set loading to false
        this.setState({
          books: response.data,
          loading: false
        });
      })
      .catch(error => console.error('Error fetching books:', error.message));
  };

  // Function to handle deleting a book
  handleDelete = id => {
    axios
      .delete(`http://localhost:3001/books/${id}`)
      .then(response => {
        console.log(response.data.message);
        // Update state to remove the deleted book
        this.setState(prevState => ({
          books: prevState.books.filter(book => book.id !== id)
        }));
      })
      .catch(error => console.error('Error deleting book:', error.message));
  };

  // Function to render the books carousel
  renderBooks() {
    const { books, loading } = this.state;
    console.log("RENDERBOOKS METHOD, Books and loading", books, loading);
    if (loading) {
      // Show loading message while fetching books
      return <p>Loading...</p>;
    } else if (books.length > 0) {
      // Render the carousel with books data if available
      return (
        <Carousel>
          <TransitionGroup>
            {books.map(book => (
              <CSSTransition key={book.id} timeout={500} classNames="fade">
                <Carousel.Item>
                  <img className="book-image" src={book.imageUrl} alt={book.title} />
                  <Carousel.Caption className="book-caption">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">By {book.author}</p>
                    <button onClick={() => this.handleDelete(book.id)}>Delete</button>
                  </Carousel.Caption>
                </Carousel.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Carousel>
      );
    } else {
      // Show message if there are no books available
      return <p>Book collection is empty.</p>;
    }
  }
  render() {
    return (
      <div className="best-books-container">
        {/* Render section title */}
        <h2 className="section-title">Best Books</h2>
        <button onClick={this.props.toggleBookFormModal}>Add New Book</button>
        {this.state.books.length
          ? this.state.books.map(book => (
              <div>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <button onClick={() => this.handleDelete(book.id)}>Delete</button>
              </div>
            ))
          : <p>No Books</p>
        }
      </div>
    );
  }
}

export default BestBooks;
