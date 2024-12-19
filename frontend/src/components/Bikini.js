import React, { useState, useEffect, useRef } from 'react';

function Bikini() {
    return (
        <div className='relative bg-pink h-screen flex justify-center items-center'>

            <div className="text-5xl sm:text-7xl font-extrabold uppercase tracking-wider text-spongeYellow text-center">
                <span className="drop-shadow-[4px_4px_0_rgb(0,0,255)] skew-y-3 skew-x-3">Bikini</span> <br />
                <span className="drop-shadow-[4px_4px_0_rgb(255,0,0)] skew-y-3 skew-x-3">Bottoms Up</span> <br />
                <span className="drop-shadow-[4px_4px_0_rgb(255,255,0)] skew-y-3 skew-x-3">2023</span> <br />
            </div>
        </div>
    );
}

export default Bikini;