import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', route: '/' },
  { name: 'Events', route: '/events' },
  { name: 'Donation', route: '/donation' },
  { name: 'Blog', route: '/blog' },
]
const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="bg-transparent fixed top-0 w-full z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex px-4 py-9 justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mt-2 flex items-center">
            {/* Add your logo here */}
            <img src={logo} className='w-52' alt="" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FaBars className="h-6 text-black w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden text-black md:block">
            <div className="ml-10 flex items-center  space-x-4">
              {navLinks.map((link) => (
                <NavLink className='font-bold' to={link.route} key={link.route}>{link.name}</NavLink>
              ))}
              <button onClick={()=>navigate('/register')} className='px-6 rounded-lg text-white py-2 bg-primary font-bold'>Register</button>
              <button className='px-6 rounded-lg text-white py-2 bg-[#434141] font-bold'>Admin</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-2 bg-black"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="/"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              {/* Add more mobile menu links as needed */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
