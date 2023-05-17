import React from 'react';
import logo from '../../assets/logo/logo.png';
import { BsPeople } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { Outlet, useNavigate } from 'react-router-dom';
const Admin = () => {
    document.title = 'Admin | Volunteer Network';
    const navigate = useNavigate();
    return (
        <div className='w-[90%] mx-auto mt-5'>
            <div className="grid grid-cols-5 ">
                <div className="col-span-1">
                    <img src={logo} onClick={() => navigate('/')} className='w-52 cursor-pointer' alt="" />
                    <button className='inline-flex items-center gap-3 mt-10 font-bold'><BsPeople /> Volunteer register list</button>
                    <br />
                    <button className='inline-flex items-center gap-2 font-bold mt-8  text-primary'><GoPlus /> ADD EVENT</button>
                </div>
                <div className="col-span-4">
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
};

export default Admin;