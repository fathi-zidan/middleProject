import React from 'react'
import logo from '../assets/photos/logo.jpg'
import { ImGoogle, ImFacebook, ImLinkedin } from "react-icons/im";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-black p-y-8 text-center text-white '>
            <div className='container mx-auto'>
                {/* Copyright &copy; 2023. */}
                <div className='flex items-center justify-between '>
                    <div className='flex flex-col items-center justify-between gap-y-3'>
                        <h1 className='text-white font-bold text-lg'>Explore Us</h1>
                        <div className='flex gap-x-3 mt-4'>
                            <ImFacebook className='hover:bg-violet-800' />
                            <ImGoogle className='  hover:bg-red-600 ' />
                            <ImLinkedin className='hover:bg-blue-600' />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-between gap-y-3 '>
                        <h1 className='text-white font-bold text-lg'>Learn More</h1>

                        <div className='flex flex-col items-center justify-center gap-y-1'>
                            <Link to='/' className='text-white'>Home</Link>
                            <Link to='/' className='text-white'>About</Link>
                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-between gap-y-3'>
                        <img src={logo} alt="" className='w-[70px] h-[70px] rounded-full mt-4 ml-4' />
                        <h3 className='font-bold mt-3'>Copyright &copy; 2023.</h3>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer
