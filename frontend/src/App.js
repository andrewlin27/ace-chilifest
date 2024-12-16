import React from 'react';
import { Link } from 'react-scroll';
import Hello from './components/Hello'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketInfo from './components/TicketInfo';

function App() {
  const func = () => {
    console.log(process.env.REACT_APP_TEST);
  }

  return (
    <div>
      <nav className="sticky flex justify-center bg-gray-100 py-4 shadow">
        <ul className='list-inline flex space x-8'>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="ticket-info"
              smooth={true}
              duration={500}
              className="hover:text-blue-500"
            >
              Ticket Info
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <section id="home" className="h-screen flex flex-col justify-center items-center bg-[url('../public/IMG_6956.JPEG')] bg-cover bg-center">
          {/* <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 text-stroke">80's IN ACEPEN</h1> */}
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
          <Hello />
        </section>
      </main>
    </div>
  );
}

export default App;
