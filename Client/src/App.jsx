import React, { useEffect, useState } from 'react';
import Navbar from './component/header/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [navBackground, setNavBackground] = useState('bg-gray-800');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        setNavBackground('bg-black');
      } else {
        setNavBackground('bg-transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`${navBackground} w-full`}>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
