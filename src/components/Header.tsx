import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Clientes', href: '#clients' }, // Added Clients link
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-xl font-bold">
          <Camera className="text-blue-400" size={28} />
          <span>Edithor</span>
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-blue-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Obtener Cotización
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 absolute w-full left-0 top-full shadow-lg`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-center transition duration-300"
          >
            Obtener Cotización
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
