import React, { useState, useEffect, useRef } from 'react';

function Bikini() {

    const images = [
        'bikini_1.jpeg',

    ]
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [animationState, setAnimationState] = useState('enter');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 1500);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            ref={sectionRef}
            className={`bg-gray-100 relative h-screen flex justify-center items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className='flex flex-row justify-center items-center gap-8'>
                <div className="text-5xl sm:text-7xl font-extrabold uppercase tracking-wider text-spongeYellow text-center">
                    <span className="drop-shadow-[4px_4px_0_rgb(0,0,255)] skew-y-3 skew-x-3">Bikini</span> <br />
                    <span className="drop-shadow-[4px_4px_0_rgb(255,0,0)] skew-y-3 skew-x-3">Bottoms Up</span> <br />
                    <span className="drop-shadow-[4px_4px_0_rgb(255,255,0)] skew-y-3 skew-x-3">2023</span> <br />
                </div>
                <div className="w-1/2 flex justify-center">
                    <img
                        src={images[currentImageIndex]}
                        className={`w-3/5 rounded-lg shadow-lg transition-opacity duration-[1500ms] 
                            ${fade ? 'opacity-100' : 'opacity-0'}
                            h-auto`}
                        alt="Ticket Info"
                    />
                </div>
            </div>
        </div>
    );
}

export default Bikini;