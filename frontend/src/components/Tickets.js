import React from 'react'

const Tickets = () => {
  return (
    <div className="py-12 bg-gray-100 mx-auto px-20">
      <h2 className="text-4xl font-bold text-center mb-8">Tickets</h2>

      {/* Tier One Tickets */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Tier One (250 left)</h3>
        <p className="mb-6">
          These tickets come with admission into Chilifest, in addition to <u>food, drinks, and a t-shirt</u> at the ACE build. 
          Tier one tickets will also include ski goggles, fanny pack, and a koozie! Your package will 
          be delivered to your point of contact ACE member. If you do not have one, we will contact you for delivery.
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

      {/* Build Only Tickets */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Build Only</h3>
        <p className="mb-6">
          Please advise these tickets <b>DO NOT</b> inlcude admission to Chilifest. Rather, these grant you 
          access to the ACE build, along with our food and drinks. Your wrist bands will 
          be delivered to your point of contact ACE member. If you do not have one, we will contact you for delivery.
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