import React from 'react'

const Tickets = () => {
  return (
    <div className="py-12 bg-gray-100 mx-auto px-20">
      <h2 className="text-4xl font-bold text-center mb-8">Tickets</h2>

      {/* Tier One Tickets */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Tier One (250)</h3>
        <p className="mb-6">
          These tickets come with admission into Chilifest, in addition to a <u>t-shirt, food, and drinks</u> at the ACE build. 
          The first 250 tier one tickets sold will also include ski goggles, fanny pack, and a koozie! Your t-shirt will 
          be delivered to your 
          point of contact ACE member. If you do not have one, we will contact you for delivery.
        </p>
        <div className="flex justify-center space-x-8">
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
          These tickets grant you access to the ACE build, along with food and drinks.
          Please advise these ticket <b>DO NOT</b> inlcude admission to Chilifest.
        </p>
        <div className="flex justify-center space-x-8">
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