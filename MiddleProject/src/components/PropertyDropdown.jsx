import React, { useState, useEffect, useContext } from 'react'
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'


function PropertyDropdown() {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    console.log(properties)
    return (
        <Menu as='div' className='dropdown relative '>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <RiHome5Line className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'> {property}</div>
                    <div className='text-[13px] '>Select your property</div>
                    {
                        isOpen ? (
                            <RiArrowUpSLine className="dropdown-icon-secondary" />
                        ) : (
                            <RiArrowDownSLine className="dropdown-icon-secondary" />

                        )
                    }

                </div>
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                {properties.map((property, index) => (
                    <Menu.Item onClick={() => setProperty(property)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index} item={property}>
                        {property}
                    </Menu.Item>
                ))}

            </Menu.Items>


        </Menu>
    )
}

export default PropertyDropdown;
