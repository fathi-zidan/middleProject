import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/photos/logo.jpg'

function Header() {
    return (
        <header className='py-6 mb12 border-b' >
            <div className="container mx-auto flex 
       justify-between items-center">
                <Link to='/'>
                    <img width='100px' height='100px' src={logo} alt="Logo" />
                </Link>
                <div className='flex items-center gap-6'>
                    <Link to='/Add' className='hover:text-violet-900 transition'>Add House</Link>
                    <Link to='/LogIn' className='hover:text-violet-900 transition'>Log in</Link>
                    <Link to='/signUp' className='bg-violet-700 hover:bg-violet-800
            text-white px-4 py-3 rounded-lg transition'>Sign up</Link>
                </div>
            </div>


        </header>
    )
}

export default Header
