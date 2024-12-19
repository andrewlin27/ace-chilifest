import React, { useState, useEffect, useRef } from 'react';

const images = [
    'acetoberfest_1.jpeg',
    'acetoberfest_2.jpeg',
    'acetoberfest_4.JPG',
    'acetoberfest_7.JPG',
    'acetoberfest_8.JPEG',
]

function ACEtoberfest() {

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [randomImage, setRandomImage] = useState(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isFading, setIsFading] = useState(false);
    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);
    const [imageWidth, setImageWidth] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }, []);

    const handleImage = () => {
        if (imageRef.current) {
            setImageWidth(imageRef.current.naturalWidth);
        }
    };

    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            const containerWidth = imageContainerRef.current?.getBoundingClientRect().width || window.innerWidth;
            const containerHeight = imageContainerRef.current?.getBoundingClientRect().height || window.innerHeight;
            const randomIndex = Math.floor(Math.random() * images.length);
            const img = new Image();
            img.src = images[randomIndex];

            img.onload = () => {
                const imgWidth = img.naturalWidth;
                const imgHeight = img.naturalHeight;

                const padding = 200;
                const innerMargin = 100;

                const maxLeft = containerWidth - imgWidth - padding - innerMargin * 2;
                const maxTop = containerHeight - imgHeight - padding - innerMargin * 2;

                const safeMaxLeft = Math.max(0, maxLeft);
                const safeMaxTop = Math.max(0, maxTop);
    
                const randomTop = Math.floor(Math.random() * safeMaxTop) + padding / 2 + innerMargin;
                const randomLeft = Math.floor(Math.random() * safeMaxLeft) + (padding + innerMargin);
    
                setRandomImage(images[randomIndex]);
                setPosition({ top: randomTop, left: randomLeft });

                setTimeout(() => setIsFading(true), 0);

                setTimeout(() => {
                    setIsFading(false);
                }, 2000);

                setTimeout(() => setRandomImage(null), 2500);
            };

        }, 3000);

        return () => clearInterval(interval);
    }, [isVisible]);


    return (
        <div>
            <div
                ref={sectionRef}
                className={`flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-500 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className='text-5xl sm:text-7xl text-brown-800 tracking-wide mb-4'>
                    ACE Chilifest 2024 Presents
                </h1>
                <h1 className="text-5xl sm:text-7xl font-gothic text-brown-800 tracking-wide">
                    ACEtoberfest
                </h1>

                <div className='relative w-full h-[600px] mt-6 overflow-hidden'>
                    {randomImage && (
                        <img
                            src={randomImage}
                            alt="ACEtoberfest"
                            className={`absolute transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'
                                }`}
                            onLoad={handleImage}
                            style={{
                                top: position.top,
                                left: position.left,
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ACEtoberfest;