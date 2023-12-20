import React from 'react'

import BannerImg from '../assets/photos/house-banner.png'
import Search from './Search'

function Banner() {
    return (
        <section className='h-full max-h-[640px] mb-8 xl:mb-24 mr-10'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml-[135px] flex 
            flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 '>
                    <h1 className='text-4xl lg:text-[58px]
                font-semibold leading-none mb-6'>
                        <span className='text-violet-700'>Find</span> Your Dream House With Us.</h1>
                    <p className='max-w-[480px] mb-8'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolorem perspiciatis doloribus maxime asperiores inventore sequi officia accusantium tempore aperiam?
                    </p>

                </div>
                <div className='hidden flex-1 lg:flex justify-end items-end mb-10 mt-4'>
                    <img className='rounded' src='https://www.vanulaw.com/wp-content/uploads/2017/10/house-03.jpg' alt="IMg" />
                </div>
            </div>
            <Search />

        </section>
    )
}

export default Banner
