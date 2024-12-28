import React from 'react'

const Tickets = () => {
  return (
    <div className="py-12 bg-gray-100 mx-auto px-12 sm:px-64">
      <h2 className="text-4xl font-bold text-center mb-8">Tickets</h2>

      {/* Tier One Tickets 130/195*/}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Tier One - Ends Jan 31, 2025</h3>
        <ul className='list-disc list-inside mb-3'>
          <li>Food and drinks at the ACE build</li>
          <li>Admission to Chilifest</li>
          <li>T-Shirt</li>
          <li>
            80's in ACEpen gear (first 250 tickets)
            <ul className="list-decimal list-inside ml-6">
              <li>Ski goggles</li>
              <li>Fanny pack</li>
              <li>Koozie</li>
            </ul>
          </li>
        </ul>
        <p className="mb-6">
          Your package will be delivered to your point of contact ACE member. 
          If you do not have one, we will contact you for delivery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QXduTK7YftLNAStFJocGhwp"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QXdtOK7YftLNAStyOULBvsV"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
        </div>
      </div>
      
      {/* Tier Two 140/205 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Tier Two - Ends Feb 28, 2025</h3>
        <p className="mb-6">
          Identitical to Tier One
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QZje8K7YftLNAStOSrJl5S9"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QZjVlK7YftLNAStZFlWdwHk"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
        </div>
      </div>

      {/* Tier Three 150/215 */}
      {/* <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Tier Three</h3>
        <p className="mb-6">
          Identitical to Tier One/Two
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QZjqbK7YftLNAStaKhZ7mes"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QZjzAK7YftLNAStVV3sephz"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
        </div>
      </div> */}

      {/* Member/alumni 180 */}
      {/* <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Active Members & Alumni</h3>
        <p className="mb-6">
          Identitical to Tier One
        </p>
        <div className="flex justify-center">
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QawPEK7YftLNAStUQuvJqva"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
        </div>
      </div> */}

      {/* Build Only Tickets */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Build Only</h3>
        <ul className='list-disc list-inside mb-3'>
          <li>Food and drinks at the ACE build</li>
          <li><span className='font-bold'>DOES NOT</span> include admission to Chilifest</li>
        </ul>
        <p className="mb-6">
          Your wrist bands will be delivered to your point of contact ACE member.
          If you do not have one, we will contact you for delivery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QXZJqK7YftLNASt4eSZkqM8"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
          <div className='border-2 border-black rounded-md'>
            <stripe-buy-button
              buy-button-id="buy_btn_1QXZObK7YftLNASt5AetDWvt"
              publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
            ></stripe-buy-button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tickets