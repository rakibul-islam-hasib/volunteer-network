import React from 'react';
import Hero from '../header/Hero';
import Services from './Services';

const Home = () => {
    document.title = "Home | Volunteer Network"
    return (
        <div>
            <Hero />
            <Services /> 
        </div>
    );
};

export default Home;