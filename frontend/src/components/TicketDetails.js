import React from 'react'

const TicketDetails = () => {
  return (
    <div className="py-12 bg-gray-100 mx-auto px-12 sm:px-96">
      <h2 className="text-4xl font-bold text-center mb-8">Details</h2>

      {/* Tier One Tickets 130/195*/}
      <div className="mb-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Tier One</h3>
          <p className="text-lg text-gray-700">Ends Jan 28, 2025</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Tier Two</h3>
          <p className="text-lg text-gray-700">Ends Feb 16, 2025</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Tier Three</h3>
          <p className="text-lg text-gray-700">Ends March 19, 2025</p>
        </div>
        <ul className='list-disc list-inside mb-1'>
          <li>Food and drinks at the ACE build</li>
          <li>Admission to Chilifest</li>
          <li>T-Shirt (while supplies last)</li>
          <li>
          80's in ACEpen gear <span className="font-semibold">SOLD OUT</span>
            <ul className="list-decimal list-inside ml-6">
              <li>Ski goggles *</li>
              <li>Fanny pack *</li>
              <li>Koozie *</li>
            </ul>
          </li>
        </ul>
        <p className="my-4">
          Your package will be delivered to your point of contact ACE member. 
          If you do not have one, we will contact you for delivery.
        </p>
      </div>

      {/* Tier Three 150/215 */}
      {/* <div className="mb-8">
        <h3 className="text-2xl font-semibold">Tier Three</h3>
        <p className="mb-3">
          Identitical to Tier One/Two
        </p>
        </div>
      </div> */}

      {/* Member/alumni 180 */}
      {/* <div className="mb-8">
        <h3 className="text-2xl font-semibold">Active Members & Alumni</h3>
        <p className="mb-3">
          Identitical to Tier One
        </p>
        </div>
      </div> */}

      <div>
        <p className="text-sm">
          * Gear is SOLD OUT
        </p>
      </div>
    </div>
  )
}

export default TicketDetails