import React, { useEffect, useState, useRef } from 'react'

const TicketItems = () => {

    const items = [
        'Fanny Pack',
        'Goggles',
        'T-shirt',
        'Coozie'
    ];
    const [visibleItems, setVisibleItems] = React.useState(items);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entires) => {
                entires.forEach((entry) => {
                    const index = entry.target.getAttribute('data-index');
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => ([...prev, index]));
                    } else {
                        setVisibleItems((prev) => prev.filter((item) => item !== index));
                    }
                });
            },
            { threshold: 0.5 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            {items.map((item, index) => (
                <div
                    key={index}
                    data-index={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`opacity-0 transform transition-all duration-700 ${visibleItems.includes(String(index))
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}
                    style={{
                        marginBottom: '1rem',
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );

}

export default TicketItems