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
      <nav className="sticky">
        <ul className='list-inline'>
          <li>
            <a href="#home" className='hover:text-blue-500'>
              Home
            </a>
            <a href="/ticket-info" className='hover:text-blue-500'>
              Ticket Info
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="home" className="section">
          <h1 className="text-6xl text-red-500">ACE Chilifest</h1>
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white"
            onClick={func}
          >
            .env test
          </button>
        </section>

        <section id="ticket-info" className="section">
          <TicketInfo />
        </section>

        <section id="hello" className="section">
          <Hello />
        </section>
      </main>
    </div>
  );
}

export default App;
