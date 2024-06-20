import React, { useState, useEffect } from 'react';
import SearchingForm from '../components/SearchingForm';
import BookList from '../components/BookList';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);



  return (

    <div className="bg-gradient-to-b from-[#101212] to-[#08201D] min-h-screen flex flex-col justify-center items-center">
      {/* <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" title="" className="flex">
                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg" alt="" />
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link to="/" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Home </Link>
              <Link to="/about" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> About Us </Link>
              <Link to="/contact" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Contact </Link>
            </div>
            <button type="button" className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </header> */}
       <Header />

      <section className="flex flex-col items-center justify-center min-h-screen w-full pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 lg:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">Search Every Book You want</span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">No more hassle taking loans and making payments. Try Postcrats credit card, make your life simple.</p>
            <SearchingForm />
          </div>
        </div>
        <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
        <BookList />
      </section>
      </section>
     <section>
      <Footer />
     </section>
      
    </div>
  );
}

export default Home;
