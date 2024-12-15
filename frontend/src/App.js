import React from 'react';
import Hello from './components/Hello'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
            <a href="#home" className='hover:text-blue-500 text-lg font-semibold'>
              Home
            </a>
            <a href="#ticket-info" className='hover:text-blue-500'>
              Ticket Info
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="home" className="h-screen flex flex-col justify-center items-center">
          {/* <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 text-stroke">80's IN ACEPEN</h1> */}
          {/* <h1 className="text-8xl font-extrabold text-transparent relative">
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-stroke">
              80's IN ACEPEN
            </span>
          </h1> */}
          <h1 className="text-8xl font-extrabold text-transparent relative custom-outline">
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
