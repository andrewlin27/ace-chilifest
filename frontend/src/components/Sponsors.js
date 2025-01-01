import React from 'react'

const Sponsors = () => {
    const sponsors = [
        { id: 1, name: 'West Campus Tees', logo: 'wct.png' },
    ];

  return (
    <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Thank you to our Sponsors!</h2>
    <div className="flex flex-wrap justify-center items-center gap-8">
        {sponsors.map((sponsor) => (
        <div key={sponsor.id} className="w-40 h-40 flex items-center justify-center bg-white shadow-lg rounded-md">
            <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
            />
        </div>
        ))}
    </div>
    </div>
  )
}

export default Sponsors