import React from 'react';

const Booking = () => (
  <div id="booking">
    <h1 className="booking-title">Booking</h1>
      <cite>Opening Times: 11:00 PM - 03:00 AM</cite>
      <div className="booking__card">
      <div className="booking__card__details">
      <span className="booking__card__details__title">Booking A Table Include:</span>
        <ul>
          <li>Table bookings contact: +00 00 00 00 00</li>
          <ul>
            <li>Fast track entry (Queue Jump)</li>
            <li>Bar spend as per minimum spend included</li>
            <li>Designated hostess service for the duration of the party</li>
          </ul>
          <li>For aditional VIP services contact: +00 00 00 00 00</li>
        </ul>
      </div>  
      </div>
  </div>
);

export default Booking;