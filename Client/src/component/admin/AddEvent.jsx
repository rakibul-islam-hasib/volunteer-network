import { ref } from 'firebase/storage';
import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { storage } from '../../firebase/firebase.init';



const AddEvent = () => {
    const storageRef = ref(storage )
    const handelFromSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            title: formData.get('title'),
            date: formData.get('date'),
            description: formData.get('description'),
            banner: formData.get('file'),
        }
        console.log(data);
    }
    return (
        <div>
            <div className="title px-7 py-5">
                <h1 className='text-2xl font-bold'>Add event</h1>
            </div>
            <div className="bg-[#F4F7FC] w-full h-full">
                <form onSubmit={handelFromSubmit} className='bg-white w-full' action="">
                    <div className="flex">
                        <div className="">
                            <h1 className='text-2xl font-semibold mb-5'>Event Title</h1>
                            <input type="text" name='title' className='outline-none border border-blue-500 px-3 rounded-lg placeholder:font-bold py-1' placeholder='Event Title' />
                        </div>
                        <div className="ml-24">
                            <h1 className='text-2xl font-semibold mb-5'>Event Date</h1>
                            <input type="date" name='date' className='outline-none border border-blue-500 px-3 rounded-lg placeholder:font-bold py-1' placeholder='Event Title' />
                        </div>
                    </div>
                    {/* Description  */}
                    <div className="flex">
                        <div className="mt-10">
                            <h1 className='text-2xl font-semibold mb-5'>Description</h1>
                            <textarea name="description" id="" cols="30" rows="5" className='outline-none border border-blue-500 w-full px-3 rounded-lg placeholder:font-bold py-1 ' placeholder='Description'></textarea>
                        </div>
                        <div className="mt-10">
                            <h1 className='text-2xl font-semibold mb-5'>Banner</h1>
                            <div className=" bg-white px-2">
                                <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                                    <div className="md:flex">
                                        <div className="w-1/2 p-3">
                                            <div className="relative border-dotted h-40 rounded-lg  border-2 border-blue-700 bg-gray-100 flex justify-center items-center">

                                                <div className="absolute">

                                                    <div className="flex flex-col items-center">
                                                        {/* <i className="fa fa-folder-open fa-4x text-blue-700"></i> */}
                                                        <FaFolderOpen className='text-blue-700 text-4xl' />
                                                        <span className="block text-gray-400 font-normal">Attach you files here</span>
                                                    </div>
                                                </div>

                                                <input type="file" className="h-full w-full opacity-0" name="file" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Banner  */}
                    <button type='submit' className='bg-primary px-7 py-2 rounded-md font-bold text-white'>Add This Event</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;