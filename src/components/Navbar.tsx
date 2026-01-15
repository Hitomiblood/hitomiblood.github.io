'use client';

import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          Miguel Gómez
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </div>
        {/* A basic mobile menu button can be added if needed */}
        <div className="md:hidden">
           {/* Placeholder for hamburger icon */}
        </div>
      </nav>
    </header>
  );
};
