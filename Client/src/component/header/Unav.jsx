import React from 'react';
import logo from '../../assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
// U navbar mining user navbar
const Unav = () => {
    const navigate = useNavigate();
    return (
        <div className='py-6 flex justify-center items-center '>
            <img src={logo} onClick={()=>navigate('/')} className='w-44 cursor-pointer' alt="" />
        </div>
    );
};

export default Unav;