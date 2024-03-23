// components/events/EventsCard.js
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function EventsCard({ title, imageLink, description }) {
  return (
    // Define the card container with responsive width
    <div className="max-w-md mx-auto shadow-md hover:shadow-xl bg-white border-solid duration-500 overflow-hidden">
      <h3 className="text-primary-main font-semibold body-large p-4 text-center">
        {title}
      </h3>
      <div className="w-full overflow-hidden">
        <img
          src={imageLink} // Fallback to a default image if none is provided
          alt={`Image for ${title}`}
          className="w-full object-cover object-top" // Make sure the image covers the width and adjust height accordingly
          style={{ height: '200px' }} // Adjust height as necessary
        />
      </div>
      <div className="p-4">
        <p className="body-small text-justify">{description}</p>
      </div>
    </div>
  );
}
