import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));

function About() {
  return ( 
    <section id="about" className="bg-gradient-to-b from-[#101212] to-[#08201D] min-h-screen flex flex-col">
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <div className="container px-6 py-60 mx-auto flex-grow">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white sm:text-1xl">About Us</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            At AyaanBooks, we are committed to revolutionizing the online book searching experience by offering an extensive and user-friendly platform. 
            Our mission is to simplify the process of finding the perfect book for any purpose, whether it’s for education, entertainment, or professional development. 
            We curate a vast selection of titles, ensuring that our users have access to the best resources available. 
            Our dedicated team works tirelessly to provide personalized recommendations, 
            making book discovery both enjoyable and efficient. Join us on our journey to foster a love of reading and lifelong learning for everyone.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white">Our Team</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              <div className="text-center">
                <img className="w-32 h-32 mx-auto rounded-full" src="pic.jpeg" alt="Team Member" />
                <h4 className="mt-4 text-lg font-medium text-white">Ayaan Dhaqane</h4>
                <p className="mt-2 text-base text-gray-300">CEO</p>
              </div>
              <div className="text-center">
                <img className="w-32 h-32 mx-auto rounded-full" src="pic.jpeg" alt="Team Member" />
                <h4 className="mt-4 text-lg font-medium text-white">Bahja Abdi</h4>
                <p className="mt-2 text-base text-gray-300">CTO</p>
              </div>
              <div className="text-center">
                <img className="w-32 h-32 mx-auto rounded-full" src="pic.jpeg" alt="Team Member" />
                <h4 className="mt-4 text-lg font-medium text-white">Amina Abdrahman</h4>
                <p className="mt-2 text-base text-gray-300">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading/> }>
        <Footer />
      </Suspense>
    </section>
  );
}

export default About;
