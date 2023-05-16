import React from 'react';
import Navbar from './component/header/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar /> {/* Add this line */}
      <Outlet /> 
    </div>
  );
};

export default App;