import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  const bookInfo = book.volumeInfo;

  return (
    <Link to={`/book/${book.id}`} className="block p-4 border rounded shadow-sm bg-white">
      <div className="flex flex-col items-center">
        {bookInfo.imageLinks && bookInfo.imageLinks.thumbnail && (
          <img className="w-32 h-48 mb-4" src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title} />
        )}
        <h3 className="text-lg font-bold">{bookInfo.title}</h3>
        {bookInfo.authors && (
          <p className="text-sm text-gray-600">by {bookInfo.authors.join(', ')}</p>
        )}
        {bookInfo.publishedDate && (
          <p className="text-sm text-gray-600">Published: {bookInfo.publishedDate}</p>
        )}
      </div>
    </Link>
  );
}

export default BookCard;
