import React, { useState, useEffect, useRef } from 'react';
import 'flowbite';

const images = [
    'acetoberfest_1.jpeg',
    'acetoberfest_2.jpeg',
    'acetoberfest_4.JPG',
    'acetoberfest_7.JPG',
    'acetoberfest_8.JPEG',
    'acetoberfest_15.jpg',
]

function ACEtoberfest() {

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isFading, setIsFading] = useState(false);
    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);
    const [imageWidth, setImageWidth] = useState(0);
    const imageCycleRef = useRef(null);


    // useEffect(() => {
    //     // Preload images
    //     const preloadImages = () => {
    //         images.forEach((src) => {
    //             const img = new Image();
    //             img.src = src;
    //         });
    //     };

    //     preloadImages();

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //                 showFirstImage(); // Show the first image immediately
    //                 startFadingImages();
    //             } else {
    //                 setIsVisible(false);
    //                 clearInterval(imageCycleRef.current);
    //             }
    //         },
    //         {
    //             root: null,
    //             rootMargin: '0px',
    //             threshold: 0.5,
    //         }
    //     );

    //     if (sectionRef.current) {
    //         observer.observe(sectionRef.current);
    //     }

    //     return () => {
    //         if (sectionRef.current) {
    //             observer.unobserve(sectionRef.current);
    //         }
    //         clearInterval(imageCycleRef.current);
    //     };
    // }, []);

    // const showFirstImage = () => {
    //     const containerWidth = imageContainerRef.current?.getBoundingClientRect().width || window.innerWidth;
    //     const containerHeight = imageContainerRef.current?.getBoundingClientRect().height || window.innerHeight;
    //     // const randomIndex = Math.floor(Math.random() * images.length);
    //     const img = new Image();
    //     img.src = images[currentImageIndex];

    //     img.onload = () => {
    //         const imgWidth = img.naturalWidth;
    //         const imgHeight = img.naturalHeight;

    //         const padding = 200;
    //         const innerMargin = 100;

    //         const maxLeft = containerWidth - imgWidth - padding - innerMargin * 2;
    //         const maxTop = containerHeight - imgHeight - padding - innerMargin * 2;

    //         const safeMaxLeft = Math.max(0, maxLeft);
    //         const safeMaxTop = Math.max(0, maxTop);

    //         const randomTop = Math.floor(Math.random() * safeMaxTop) + padding / 2 + innerMargin;
    //         const randomLeft = Math.floor(Math.random() * safeMaxLeft) + (padding + innerMargin);

    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //         setPosition({ top: randomTop, left: randomLeft });

    //         setTimeout(() => setIsFading(true), 0);

    //         setTimeout(() => {
    //             setIsFading(false);
    //         }, 2000);

    //         setTimeout(() => setCurrentImageIndex(null), 2500);
    //     };
    // };


    // const handleImage = () => {
    //     if (imageRef.current) {
    //         setImageWidth(imageRef.current.naturalWidth);
    //     }
    // };

    // const startFadingImages = () => {
    //     let nextIndex = currentImageIndex;
    //     imageCycleRef.current = setInterval(() => {
    //         nextIndex = (nextIndex + 1) % images.length;
    //         setCurrentImageIndex(nextIndex);

    //         const containerWidth = imageContainerRef.current?.getBoundingClientRect().width || window.innerWidth;
    //         const containerHeight = imageContainerRef.current?.getBoundingClientRect().height || window.innerHeight;

    //         const img = new Image();
    //         img.src = images[nextIndex];

    //         img.onload = () => {
    //             const imgWidth = img.naturalWidth;
    //             const imgHeight = img.naturalHeight;

    //             const padding = 200;
    //             const innerMargin = 100;

    //             const maxLeft = containerWidth - imgWidth - padding - innerMargin * 2;
    //             const maxTop = containerHeight - imgHeight - padding - innerMargin * 2;

    //             const safeMaxLeft = Math.max(0, maxLeft);
    //             const safeMaxTop = Math.max(0, maxTop);

    //             const randomTop = Math.floor(Math.random() * safeMaxTop) + padding / 2 + innerMargin;
    //             const randomLeft = Math.floor(Math.random() * safeMaxLeft) + (padding + innerMargin);

    //             setPosition({ top: randomTop, left: randomLeft });

    //             setTimeout(() => {
    //                 setIsFading(true);
    //                 setTimeout(() => setIsFading(false), 2000);
    //             }, 50);
    //         };
    //     }, 3000);
    // };


    return (
        <div>
            <div className="py-12 flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-yellow-300 via-white to-yellow-500 transition-opacity duration-1000">
                <h1 className="text-center text-5xl sm:text-7xl font-gothic text-brown-800 tracking-wide">
                    ACEtoberfest<br />2024
                </h1>

                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`hidden duration-700 ease-in-out ${index === currentImageIndex ? 'block' : ''}`}
                                data-carousel-item
                            >
                                <img
                                    src={image}
                                    className="absolute block w-3/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt={`carousel-${index}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Slider indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'}`}
                                aria-current={index === currentImageIndex ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => setCurrentImageIndex(index)}
                            ></button>
                        ))}
                    </div>

                    {/* Slider controls */}
                    <button
                        type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    <button
                        type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default ACEtoberfest;