import React, { useState, useEffect, useContext } from 'react'
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'


function PriceDropdown() {
    const { price, setPrice } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    const prices = [
        {
            value: 'price range (any)'
        },
        {
            value: '100000 - 130000',

        },
        {
            value: '130000 - 160000',

        },
        {
            value: '160000 - 190000',

        },
        {
            value: '190000 - 220000',

        },
        {
            value: '10000 - 30000',

        },
        {
            value: '30000 - 40000',

        },
        {
            value: '300000 - 400000',

        }
    ]

    return (
        <Menu as='div' className='dropdown relative '>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <RiWallet3Line className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'> {price}</div>
                    <div className='text-[13px] '>Select your price</div>
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
                {prices.map((ele, index) => (
                    <Menu.Item onClick={() => setPrice(ele.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index} item={price}>
                        {ele.value}
                    </Menu.Item>
                ))}

            </Menu.Items>


        </Menu>
    )
}

export default PriceDropdown;
