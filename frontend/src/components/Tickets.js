import React from 'react'

const Tickets = () => {
  return (
    <div className='tickets-container flex flex-row items-center justify-center gap-2'>
        <div className="border-2 border-black p-2 rounded-md">
            <stripe-buy-button
                buy-button-id="buy_btn_1QXFk1K7YftLNAStFJ2EMRCL"
                publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
                >
            </stripe-buy-button>
        </div>
        <div className="border-2 border-black p-2 rounded-md">
            <stripe-buy-button
                buy-button-id="buy_btn_1QXHExK7YftLNAStignFGd15"
                publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
                >
            </stripe-buy-button>
        </div>
        <div className="border-2 border-black p-2 rounded-md">
            <stripe-buy-button
                buy-button-id="buy_btn_1QXZJqK7YftLNASt4eSZkqM8"
                publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
                >
            </stripe-buy-button>
        </div>
        <div className="border-2 border-black p-2 rounded-md">
            <stripe-buy-button
                buy-button-id="buy_btn_1QXZObK7YftLNASt5AetDWvt"
                publishable-key="pk_live_51QXBW9K7YftLNASt6Lhrq3FtAOmPkKlyC9QjRbtHGHXiJSCOyVqmy5jyjCbe6ZkBxuRHlstTUYilVOc8DWms3Td900Eq9lzcXN"
                >
            </stripe-buy-button>
        </div>
    </div>
  )
}

export default Tickets