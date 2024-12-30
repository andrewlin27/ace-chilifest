import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 flex justify-center py-4 bg-black bg-opacity-70 backdrop-blur z-10">
        <ul className='list-inline flex space x-8'>
          <li className='text-white font-bold text-lg py-2 px-4 transition-all duration-300'>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300 cursor-pointer">
              Home
            </ScrollLink>
          </li>
          {/* <li className='text-white font-bold text-lg py-2 px-4 transition-all duration-300'>
            <ScrollLink
              to="ticket-info"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300 cursor-pointer">
              Ticket Info
            </ScrollLink>
          </li> */}
          <li className='text-white font-bold text-lg py-2 px-4 transition-all duration-300'>
            <ScrollLink
              to="tickets"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors ease-in-out duration-300 cursor-pointer">
              Buy Tickets
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar