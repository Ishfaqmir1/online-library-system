import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      category === 'all' || book.category.toLowerCase() === category.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books">
      <h2 className="welcome-title">Browse Books: {category}</h2>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
