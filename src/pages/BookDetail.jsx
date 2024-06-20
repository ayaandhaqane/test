import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(() => {
        setError('Failed to fetch book details');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  const bookInfo = book.volumeInfo;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101212] to-[#08201D] text-black flex items-center justify-center py-12">
      <div className="w-full max-w-4xl p-6 bg-white  rounded-lg shadow-lg">
        <button onClick={() => navigate(-1)} className="text-black hover:text-blue-700 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Go Back
        </button>
        <div className="flex flex-col md:flex-row items-center">
          <img src={bookInfo.imageLinks?.thumbnail} alt={bookInfo.title} className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-8 rounded-lg shadow-md" />
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-4">{bookInfo.title}</h2>
            <p className="mb-2"><strong>Author:</strong> {bookInfo.authors && bookInfo.authors.join(', ')}</p>
            <p className="mb-2"><strong>Published Date:</strong> {bookInfo.publishedDate}</p>
            <p className="mb-2"><strong>Categories:</strong> {bookInfo.categories && bookInfo.categories.join(', ')}</p>
            <p className="mb-4"><strong>Description:</strong> {bookInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
