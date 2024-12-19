import React, { useEffect, useRef } from 'react'

const TicketItems = () => {

    const items = [
        'Fanny Pack',
        'Goggles',
        'T-shirt',
        'Koozie'
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
        <div className="flex flex-col items-center"
        style={{
            background: 'linear-gradient(to bottom, lightblue, purple)',
            WebitkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            backgroundSize: '100% 400%',
        }}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    data-index={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`opacity-0 transform transition-all duration-700 text-4xl font-extrabold text-transparent 
                        bg-gradient-to-b from-lightblue-400 to-pink-800 bg-clip-text ${visibleItems.includes(String(index))
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
                    style={{
                        marginBottom: '200px',
                        backgroundSize: '100% 400%',
                        backgroundPosition: `0 ${(index / items.length) * 100}% `

                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );

}

export default TicketItems