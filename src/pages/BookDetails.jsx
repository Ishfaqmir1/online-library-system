import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <div className="book-details">
        <h2>Book not found.</h2>
        <Link to="/books/all" className="back-link">← Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details">
      <div className="details-container">
        {book.cover && (
          <img src={book.cover} alt={book.title} className="details-cover" />
        )}
        <div className="details-info">
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Rating:</strong> {book.rating} ⭐</p>
          <Link to="/books/all" className="back-link">← Back to Browse</Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
