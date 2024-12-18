import React from 'react';

function TicketInfo() {
    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-8'>
                <div className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-lightblue-400 to-purple-800 bg-clip-text" style={{ fontFamily: 'Press Start 2P' }}>
                    What's Included with My Ticket?
                </div>
                <div className='w-1/2 flex justify-center'>
                    <img
                        src="IMG_6958.JPEG"
                        className='w-3/5 rounded-lg shadow-lg'
                    />
                </div>
            </div>
        </div>
    );
}

export default TicketInfo;