import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>Contact us at: yohanesmesfin3@example.com</p>
      <ul className="flex justify-center space-x-4 mt-4">
        <li><a href="#" className="hover:underline">Facebook</a></li>
        <li><a href="#" className="hover:underline">Twitter</a></li>
        <li><a href="#" className="hover:underline">Instagram</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
