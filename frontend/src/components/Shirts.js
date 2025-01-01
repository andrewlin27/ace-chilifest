import React from 'react'

const Shirts = () => {
    const shirts = [
        { id: 1, name: "Girls T-Shirt", image1: 'girlshirt1.jpeg', image2: 'girlshirt2.jpeg' },
        { id: 2, name: "Guys T-Shirt", image1: 'guyshirt1.jpeg', image2: 'guyshirt2.jpeg' },
    ];

  return (
    <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">T-Shirt Designs</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
            {shirts.map((shirt) => (
            <div key={shirt.id} className="w-72 md:w-96 flex flex-col items-center">
                <img
                    src={shirt.image1}
                    alt={shirt.name}
                    className="w-full h-auto object-cover rounded-md shadow-lg mb-4"
                />
                <img 
                    src={shirt.image2}
                    alt={shirt.name}
                    className="w-full h-auto object-cover rounded-md shadow-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{shirt.name}</h3>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Shirts