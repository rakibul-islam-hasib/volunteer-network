import React, { useContext, useEffect, useState } from 'react';
import Navbar from './component/header/NavBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const { loader } = useContext(AuthContext);
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
    loader ? <div>
      <div className='h-screen flex justify-center items-center'>
        <h1 className='text-3xl font-bold text-gray-800'>Loading...</h1>
      </div>
    </div> : <div>
      <div className={`${navBackground} w-full`}>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
