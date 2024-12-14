import React from 'react';

function TicketInfo() {
    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-8'>
                <div className='flex flex-col justify-center items-start w-1/2'>
                    <div className='underline'>What's Included with My Ticket?</div>
                    <div className='italic'>Insert graphic over what is included in ticket here</div>
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