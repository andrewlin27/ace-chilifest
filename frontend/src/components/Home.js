import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import TicketInfo from './TicketInfo';
import TicketItems from './TicketItems';
import ACEtoberfest from './ACEtoberfest';
import Bikini from './Bikini';

const Home = () => {

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
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300">
              Home
            </ScrollLink>
          </li>
          <li className='text-white font-semibold py-2 px-4 rounded-lg shadlow-lg transition-all duration-300'>
            <ScrollLink
              to="ticket-info"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300">
              Ticket Info
            </ScrollLink>
          </li>
          <li className='text-white font-semibold py-2 px-4 rounded-lg shadlow-lg transition-all duration-300'>
            <RouterLink
              to="/tickets"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300">
              Tickets
            </RouterLink>
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
        </section>

        <section id="ticket-info" className="section h-screen">
          <TicketInfo />
        </section>

        <section id="ticket-items" className="section h-creen">
          <TicketItems />
        </section>

        <section id="ace-toberfest" className="section h-screen">
          <ACEtoberfest />
        </section>

        <section id="bikini" className="section h-screen">
          <Bikini />
        </section>
      </main>
    </div>
  );
}

export default Home;
