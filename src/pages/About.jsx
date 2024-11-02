import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">About Our Book Shop</h2>
        <p className="text-white text-center mb-4">
          Welcome to our book shop, where every book tells a story! We are dedicated to providing a curated selection of books that inspire, educate, and entertain.
        </p>
        <p className="text-white text-center mb-4">
          Our mission is to foster a love for reading and to connect our community with literature that resonates. Whether you’re seeking the latest bestseller or a timeless classic, we have something for everyone.
        </p>
        <h3 className="text-xl font-semibold text-white mt-4">Our Values</h3>
        <ul className="list-disc list-inside text-white mt-2">
          <li>Passion for Literature</li>
          <li>Community Engagement</li>
          <li>Diversity in Selection</li>
          <li>Exceptional Customer Service</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
