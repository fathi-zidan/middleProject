import React, { useRef } from 'react';
import { FaGithub, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://6559b7d66981238d054ccc29.mockapi.io/users', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passRef.current.value,
            });

            console.log('Sign Up successful', response.data);
            navigate('/'); 
        } catch (error) {
            console.error('Sign Up failed', error.response.data);
        }
    };

    return (
        <section className='flex items-center justify-center'>
            <section className='max-w-[600px]  border border-gray-200 rounded-md p-8 m-4'>
                <form className='flex flex-col items-center justify-between gap-y-3' onSubmit={handleSignUp}>
                    <h1 className='text-lg font-bold'>Create An Account</h1>
                    <section className='flex items-center justify-center gap-x-1'>
                        <div className='border text-lg p-2 hover:bg-red-600 hover:text-white '><BiLogoGmail /></div>
                        <div className='border text-lg p-2 hover:bg-blue-900 hover:text-white '> <FaFacebookF /></div>
                        <div className='border text-lg p-2 hover:bg-black hover:text-white '><FaGithub /></div>
                        <div className='border text-lg p-2 hover:bg-blue-800 hover:text-white '><FaLinkedin /></div>
                    </section>
                    <div className='flex items-center justify-center text-gray-600'><h3>Use your email for registration</h3></div>

                    <input
                        name='name'
                        className='border border-gray-300 focus:border-violet-700 outline-none
              rounded  px-2 h-10 text-sm'
                        type="text"
                        placeholder='Full Name...'
                        ref={nameRef}
                    />

                    <input
                        className='border border-gray-300 focus:border-violet-700 outline-none
              rounded  px-2 h-10 text-sm'
                        type="text"
                        placeholder='Email...'
                        ref={emailRef}
                    />

                    <input
                        className='border border-gray-300 focus:border-violet-700 outline-none
              rounded  px-2 h-10 text-sm'
                        type="password"
                        placeholder='Password'
                        ref={passRef}
                    />

                    <button
                        type='submit'
                        className='bg-violet-700 hover:bg-violet-800 rounded p-3 text-sm w-full  transition text-white cursor-pointer text-center'
                    >
                        Sign Up
                    </button>
                </form>
            </section>
        </section>
    );
}

export default SignUp;
