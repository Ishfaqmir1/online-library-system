import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="book-card">
    {book.cover && (
      <img src={book.cover} alt={book.title} className="book-cover" />
    )}
    <div className="book-info">
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>Category: {book.category}</p>
      <Link to={`/book/${book.id}`} className="details-link">View Details</Link>
    </div>
  </div>
);

export default BookCard;
