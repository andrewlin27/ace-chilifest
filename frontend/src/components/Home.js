import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TicketInfo from './TicketInfo';
import TicketItems from './TicketItems';
import ACEtoberfest from './ACEtoberfest';
import Bikini from './Bikini';
import Tickets from './Tickets';
import Vegas from './Vegas';
import Footer from './Footer';
import Sponsors from './Sponsors';
import Shirts from './Shirts';
import TicketDetails from './TicketDetails';

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

      <Navbar />

      <main>
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center bg-[url('/public/background.png')] bg-cover bg-center fade-bg"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            opacity: blendOpacity,
            transition: 'opacity 0.2s ease-out',
          }}>
          <h1 className="text-center relative font-extrabold text-8xl bg-clip-text animate-neon-flash">
            80's in ACEpen
          </h1>
        </section>

        {/* <section id="ticket-info" className="section h-screen">
          <TicketInfo />
        </section> */}

        {/* <section id="ticket-items" className="section h-creen">
          <TicketItems />
        </section> */}

        <section id="ticketdetails">
          <TicketDetails />
        </section>

        <section id="shirts" className='bg-white py-12'>
          <Shirts />
        </section>

        <section id="tickets" className="section min-h-screen">
          <Tickets />
        </section>

        <section id="sponsors" className="py-12">
          <Sponsors />
        </section>

        <section id="ace-toberfest" className="section min-h-screen">
          <ACEtoberfest />
        </section>

        <section id="bikini" className="section min-h-screen">
          <Bikini />
        </section>

        <section id="vegas" className="section min-h-[50vh] sm:min-h-[150vh]">
          <Vegas />
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default Home;
