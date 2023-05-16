import React from 'react';
import img1 from '../../assets/img/animalShelter.png';
import img2 from '../../assets/img/babySit.png';
import img3 from '../../assets/img/birdHouse.png';
import img4 from '../../assets/img/childSupport.png';
import img5 from '../../assets/img/cleanWater.png';
import img6 from '../../assets/img/clearnPark.png';
import img7 from '../../assets/img/clothSwap.png';
import img8 from '../../assets/img/driveSafety.png';
import img9 from '../../assets/img/extraVolunteer.png';
import img10 from '../../assets/img/foodCharity.png';
import img11 from '../../assets/img/goodEducation.png';


const services = [
    {
        id: 1,
        img: img1,
        title: 'Animal Shelter'
    },
    {
        id: 2,
        img: img2,
        title: 'Baby Sit'
    },
    {
        id: 3,
        img: img3,
        title: 'Bird House'
    },
    {
        id: 4,
        img: img4,
        title: 'Child Support'
    },
    {
        id: 5,
        img: img5,
        title: 'Clean Water'
    },
    {
        id: 6,
        img: img6,
        title: 'Clean Park'
    },
    {
        id: 7,
        img: img7,
        title: 'Cloth Swap'
    },
    {   
        id: 8,
        img: img8,
        title: 'Drive Safety'
    },
    {
        id: 9,
        img: img9,
        title: 'Extra Volunteer'
    },
    {
        id: 10,
        img: img10,
        title: 'Food Charity'
    },
    {
        id: 11,
        img: img11,
        title: 'Good Education'
    }
]


const Services = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4 md:w-[90%] mx-auto'>
            {
                services.map(item => <div 
                key={item.id}
                className='h-[320px] w-[270px] relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out'
                >
                        <img src={item.img} className='h-full' alt="" />
                        <div 
                        className="bg-[#FF7044]   flex justify-center 
                        absolute bottom-0 left-0 w-full py-5 text-white
                        items-center">
                            <h1 className='text-2xl font-bold text-center'>{item.title}</h1>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Services;