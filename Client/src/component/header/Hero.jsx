import React from 'react';
import bgImg from '../../assets/logo/bg-img.png';
const Hero = () => {
    return (
        <div className='min-h-[70vh] bg-cover bg-fixed ' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-[70vh] text-center flex justify-center items-center bg-white bg-opacity-80">
                <div className="">
                    <h1 className='text-4xl font-bold'>I grow by helping people in need.</h1>
                        <div class="flex items-center mt-10 mx-16">
                            <input
                                type="email"
                                class="w-full h-10 px-5 text-lg text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm"
                                 placeholder="Search...." />
                            <button class="h-10 px-4 text-xs bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;