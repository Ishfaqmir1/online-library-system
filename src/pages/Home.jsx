import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const Home = () => {
  const allBooks = useSelector((state) => state.books);

  const books = useMemo(() => allBooks.slice(0, 3), [allBooks]);

  return (
    <div className="home">
     <h1 className="welcome-title">Welcome to the Online Library</h1>


      <h2>Book Categories</h2>
      <ul>
        <li>Fiction</li>
        <li>Non-Fiction</li>
        <li>Sci-Fi</li>
        <li>Biography</li>
      </ul>

      <h2>Popular Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
