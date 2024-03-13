import React, { useState } from 'react';
import axios from 'axios';

const BookFormModal = ({ toggleBookFormModal }) => {
  // Define state for form data using useState hook
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: ''
  });

  // Function to handle form input changes
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send a POST request to add a new book
      const response = await axios.post('http://localhost:3001/books', formData);
      console.log('New Book Added:', response.data);
      // You can update the state or trigger a re-fetch of the book list here
      toggleBookFormModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error adding new book:', error.message);
      // Handle errors here
    }
  };

  return (
    <div>
      <div>
        {/* Close button to toggle the visibility of the modal */}
        <span className="close" onClick={toggleBookFormModal}>&times;</span>
        <h2>Add New Book</h2>
        {/* Form for adding a new book */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            {/* Input field for the book title */}
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Author:</label>
            {/* Input field for the book author */}
            <input type="text" name="author" value={formData.author} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            {/* Input field for the book image URL */}
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
          </div>
          {/* Submit button to add the book */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookFormModal;
