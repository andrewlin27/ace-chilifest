import React, { useEffect, useState } from "react";

function Vegas() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("vegas-section");
            if (!section) return;

            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY + window.innerHeight / 2;

            const distanceFromCenter = Math.abs(scrollY - (sectionTop + sectionHeight / 2));
            const maxDistance = sectionHeight / 2;
            const newOpacity = Math.max(1 - distanceFromCenter / maxDistance, 0);

            setOpacity(newOpacity);
        };


        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            id="vegas-section"
            className="bg-fixed bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("vegas.jpg")',
                height: '150vh',

            }}>
            <h1
                className="text-white text-7xl font-extrabold text-center tracking-widest drop-shadow-[0_5px_5px_rgba(255,0,0,0.8)] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    opacity: opacity,
                    transition: "opacity 0.1s ease-out",
                }}
            >
                VIVA LAS VEGAS
                <div className="text-4xl font-semibold mt-4">2022</div>
            </h1>
        </div>
    );
}

export default Vegas;