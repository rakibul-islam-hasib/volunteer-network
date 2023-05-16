import React from 'react';
import logo from '../../assets/logo/logo.png';
import { BsPeople } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[90%] mx-auto mt-5'>
            <div className="">
                <div className="">
                    <img src={logo} onClick={()=>navigate('/')} className='w-52 cursor-pointer' alt="" />
                    <button className='inline-flex items-center gap-3 mt-7 font-bold'><BsPeople /> Volunteer register list</button>
                </div>
            </div>
        </div>
    );
};

export default Admin;