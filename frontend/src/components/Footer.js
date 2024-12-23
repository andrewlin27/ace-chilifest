import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="text-center">
        <p className="text-sm">
          Created by ACE members <span className="font-bold">Eric McGonagle</span> & <span className='font-bold'>Andrew Lin</span>
        </p>
        <div className="mt-4 mb-4 flex justify-center space-x-4"> 
          <a
            href="https://fb.me/21TgEluU2VBDyUX"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://www.instagram.com/80s_in_aspen/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
        </div>
        <p className="text-sm">
          For further questions, please contact us at <span className="font-bold">XXX</span>
        </p>
        <p className="text-sm">
          Last updated <span className='underline'>December 22nd, 2024</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer