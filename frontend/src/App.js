import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Hello from './components/Hello'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketInfo from './components/TicketInfo';
import TicketItems from './components/TicketItems';

function App() {
  const func = () => {
    console.log(process.env.REACT_APP_TEST);
  }

  const [blendOpacity, setBlendOpacity] = useState(1);

  // function to fade background image to get transition between sections
  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('home');
      const sectionHeight = section1.offsetHeight;
      const scrollY = window.scrollY;

      const opacity = Math.max(1 - scrollY / (sectionHeight / 2), 0);
      setBlendOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>

      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 flex justify-center py-4 bg-transparent z-10">
        <ul className='list-inline flex space x-8'>
          <li className='text-white font-semibold py-2 px-4 rounded-lg shadlow-lg transition-all duration-300'>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300"
            >
              Home
            </Link>
          </li>
          <li className='text-white font-semibold py-2 px-4 rounded-lg shadlow-lg transition-all duration-300'>
            <Link
              to="ticket-info"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300"
            >
              Ticket Info
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center bg-[url('../public/IMG_6956.JPEG')] bg-cover bg-center fade-bg"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: blendOpacity, 
            transition: 'opacity 0.2s ease-out',
          }}>
          <h1 className="relative text-8xl font-extrabold text-transparent custom-outline">
            80's IN ACEPEN
          </h1>
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white"
            onClick={func}
          >
            .env test
          </button>
        </section>

        <section id="ticket-info" className="section h-screen">
          <TicketInfo />
        </section>

        <section id="hello" className="section h-creen">
          <TicketItems />
        </section>
      </main>
    </div>
  );
}

export default App;
