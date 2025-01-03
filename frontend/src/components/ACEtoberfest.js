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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    return (
        <div>
            <div className="py-12 flex flex-col justify-center items-center h-screen sm:h-[150vh] bg-gradient-to-b from-yellow-300 via-white to-yellow-500 transition-opacity duration-1000">
                <h1 className="text-center text-5xl sm:text-7xl font-gothic text-brown-800 tracking-wide">
                    acetoberfest<br/>2024
                </h1>

                <div id="default-carousel" className="relative w-full mt-16" data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative z-30 h-56 flex justify-center items-center overflow-hidden rounded-lg md:h-96">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`hidden duration-700 ease-in-out ${index === currentImageIndex ? 'block' : ''}`}
                                data-carousel-item
                            >
                                <img
                                    src={image}
                                    className="absolute z-30 block w-full sm:w-3/5 h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
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