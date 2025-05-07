import React from 'react';

export default function HeaderFooter() {
  return (
    <>
      <header className="py-4 px-6 bg-white shadow-md flex justify-between items-center">
        <div className="text-xl font-bold">SoftSell</div>
        <nav>
          <a href="#" className="px-4 text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="px-4 text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </header>
      <footer className="py-6 text-center bg-gray-800 text-white mt-10">
        <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
      </footer>
    </>
  );
}