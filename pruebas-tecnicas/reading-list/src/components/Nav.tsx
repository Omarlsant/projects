import React from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-around">
        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li><Link to="/products" className="text-white hover:text-gray-300">Products</Link></li>
        <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

