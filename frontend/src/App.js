import React from 'react';
import Hello from './components/Hello'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TicketInfo from './components/TicketInfo';

function App() {
  const func = () => {
    console.log(process.env.REACT_APP_TEST);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ticket-info">Ticket Info</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <h1 className="text-6xl text-red-500">ACE Chilifest</h1>
                <button
                  className="bg-purple-500 hover:bg-blue-700 text-white"
                  onClick={func}
                >
                  .env test
                </button>
                <Hello />
              </div>
            }
          />
          <Route path="/ticket-info" element={<TicketInfo />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
