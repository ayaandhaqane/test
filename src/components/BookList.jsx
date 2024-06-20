import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from './BookCard';
import Loading from './Loading';

function BookList() {
  const { books, loading, error ,searchPerformed} = useContext(BookContext);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  if (searchPerformed && books.length === 0) {
    return <p className="text-center text-white">No books found</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
