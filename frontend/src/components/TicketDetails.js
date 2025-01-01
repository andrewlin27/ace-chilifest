import React from 'react'

const TicketDetails = () => {
  return (
    <div className="py-12 bg-gray-100 mx-auto px-12 sm:px-64">
      <h2 className="text-4xl font-bold text-center mb-8">Details</h2>

      {/* Tier One Tickets 130/195*/}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold">Tier One - Ends Jan 31, 2025</h3>
        <ul className='list-disc list-inside mb-1'>
          <li>Food and drinks at the ACE build</li>
          <li>Admission to Chilifest</li>
          <li>T-Shirt</li>
          <li>
            80's in ACEpen gear (first 250 tickets)
            <ul className="list-decimal list-inside ml-6">
              <li>Ski goggles</li>
              <li>Fanny pack</li>
              <li>Koozie</li>
            </ul>
          </li>
        </ul>
        <p className="mb-3">
          Your package will be delivered to your point of contact ACE member. 
          If you do not have one, we will contact you for delivery.
        </p>
      </div>
      
      {/* Tier Two 140/205 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold">Tier Two - Ends Feb 28, 2025</h3>
        <ul className='list-disc list-inside mb-1'>
          <li>Food and drinks at the ACE build</li>
          <li>Admission to Chilifest</li>
          <li>T-Shirt</li>
          <li>
            80's in ACEpen gear (first 250 tickets)
            <ul className="list-decimal list-inside ml-6">
              <li>Ski goggles *</li>
              <li>Fanny pack *</li>
              <li>Koozie *</li>
            </ul>
          </li>
        </ul>
        <p>
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

      {/* Build Only Tickets */}
      <div>
        <h3 className="text-2xl font-semibold">Build Only</h3>
        <ul className='list-disc list-inside mb-1'>
          <li>Food and drinks at the ACE build</li>
          <li><span className='font-bold'>DOES NOT</span> include admission to Chilifest</li>
        </ul>
        <p className="mb-3">
          Your wrist bands will be delivered to your point of contact ACE member.
          If you do not have one, we will contact you for delivery.
        </p>
      </div>

      <div>
        <p className="text-sm mt-8">
          * Gear is limited to the first 250 tickets sold
        </p>
      </div>
    </div>
  )
}

export default TicketDetails