// src/context/BookContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

 const BookContext = createContext();

 const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);


  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      setSearchPerformed(true);
      console.log(`Fetching books for query: ${query}`);
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => {
          console.log('API Response:', response.data);
          if (response.data.items) {
            setBooks(response.data.items);
          } else {
            setBooks([]);
            setError('No books found');
          }
        })
        .catch((err) => {
          console.error('API Fetch Error:', err);
          setError('Failed to fetch books');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  const searchBooks = (query) => {
    setQuery(query);
  };

  return (
    <BookContext.Provider value={{ books, searchBooks, loading, error ,searchPerformed}}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };