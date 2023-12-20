import React from 'react'
import { FaGithub, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


function SignUp() {
    return (
        <section className='flex items-center justify-center' >
            <section className='max-w-[600px]  border border-gray-200 rounded-md p-8 m-4'>
                <form className='flex flex-col items-center justify-between gap-y-3'>
                    <h1 className='text-lg font-bold'>Create An Account</h1>
                    <section className='flex items-center justify-center gap-x-1'>
                        <div className='border text-lg p-2 hover:bg-red-600 hover:text-white '><BiLogoGmail /></div>
                        <div className='border text-lg p-2 hover:bg-blue-900 hover:text-white '> <FaFacebookF /></div>
                        <div className='border text-lg p-2 hover:bg-black hover:text-white '><FaGithub /></div>
                        <div className='border text-lg p-2 hover:bg-blue-800 hover:text-white '><FaLinkedin /></div>
                    </section>
                    <div className='flex items-center justify-center text-gray-600'><h3>our use your email for register</h3></div>


                    <input name='name' className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded  px-2 h-10 text-sm' type="text" placeholder='Full Name...'
                    />

                    <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded  px-2 h-10 text-sm' type="text" placeholder='Email...' />

                    <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded  px-2 h-10 text-sm' type="text" placeholder='Password' />
                    <button type='submit' className='bg-violet-700 hover:bg-violet-800 rounded p-3 text-sm w-full  transition text-white' >Sign Up</button>
                </form>


            </section>
        </section>
    )
}

export default SignUp