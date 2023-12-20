import React, { useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import House from '../components/House';
import { useContext } from 'react';
import { HouseContext } from '../components/HouseContext';

function Modal({ setClose, house }) {
    const nameRef = useRef(null);
    const imageRef = useRef(null);
    const typeRef = useRef(null);
    const descriptionRef = useRef(null);
    const countryRef = useRef(null);
    const addressRef = useRef(null);
    const bedroomsRef = useRef(null);
    const bathroomsRef = useRef(null);
    const surfaceRef = useRef(null);
    const yearRef = useRef(null);
    const priceRef = useRef(null);
    const ownerNameRef = useRef(null);
    const ownerPhoneRef = useRef(null);
    const ownerImageRef = useRef(null);
    const { id } = useParams()
    // console.log(id);
    // console.log(house)
    const navigate = useNavigate();
    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedInfo = {
            ...house,
            name: nameRef.current.value,
            image: imageRef.current.value,
            type: typeRef.current.value,
            description: descriptionRef.current.value,
            country: countryRef.current.value,
            address: addressRef.current.value,
            bedrooms: bedroomsRef.current.value,
            bathrooms: bathroomsRef.current.value,
            surface: surfaceRef.current.value,
            year: yearRef.current.value,
            price: priceRef.current.value,
            agent: {
                name: ownerNameRef.current.value,
                phone: ownerPhoneRef.current.value,
                image: ownerImageRef.current.value,
            },
        };
        try {
            const response = await axios.put(`https://6559b7d66981238d054ccc29.mockapi.io/houses/${id}`, updatedInfo);
            console.log('House updated successfully:', response.data);
            setClose(false);
            // console.log(house)
            navigate(`/property/${id}`, { replace: true });


        } catch (err) {
            console.error('Failed to update house:', err.response.data);
            // console.log(house)
        }

    }
    return (
        <section className='fixed top-0  '>
            <section className='flex justify-between items-start gap-x-2 mt-1 ml-2 mr-2'>
                <section className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-5'>
                    <button onClick={() => setClose(!open)}>X</button>
                    <form className='flex item-start gap-x-2'>
                        <section className='flex flex-col gap-y-1 '>

                            <h2 className="text-xl font-semibold text-center">House Information</h2>
                            <div className='flex gap-x-1'>
                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='House Name'
                                    defaultValue={house.name} ref={nameRef} onChange={(e) => nameRef.current.value = e.target.value} />
                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='House Image' defaultValue={house.image} ref={imageRef} />
                            </div>
                            <div className='flex gap-x-1'>
                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='Type' defaultValue={house.type} ref={typeRef} />
                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='Country' defaultValue={house.country} ref={countryRef} />
                            </div>
                            <div className='flex gap-x-1'>

                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='Address' defaultValue={house.address} ref={addressRef} />
                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='BedRooms' defaultValue={house.bedrooms} ref={bedroomsRef} />
                            </div>
                            <div className='flex gap-x-1'>

                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='BathRooms' defaultValue={house.bathrooms} ref={bathroomsRef} />
                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='Surface' defaultValue={house.surface} ref={surfaceRef} />
                            </div>

                            <div className='flex gap-x-1'>

                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='Year' defaultValue={house.year} ref={yearRef} />
                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-10 text-sm' type="text" placeholder='Price' defaultValue={house.price} required ref={priceRef} />
                            </div>

                            <textarea className='border border-gray-300 focus:border-violet-700 
                            outline-none resize-none rounded w-full p-4 h-15 text-sm' placeholder='Description' defaultValue={house.description} ref={descriptionRef} ></textarea>

                            <section className='flex flex-col gap-y-4 w-full'>
                                <h2 className="text-xl font-semibold text-center">Owner Information</h2>
                                <div className='flex gap-x-1'>
                                    <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-8 text-sm' type="text" placeholder='Owner Name' defaultValue={house.agent.name} ref={ownerNameRef} />
                                    <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-8 text-sm' type="text" placeholder='Phone' defaultValue={house.agent.phone} ref={ownerPhoneRef} />
                                </div>

                                <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-2 h-8 text-sm' type="text" placeholder='Image' defaultValue={house.agent.image} ref={ownerImageRef} />
                                {/* <button className='bg-violet-700 hover:bg-violet-800 rounded p-4 text-sm w-full transition text-white'>Add House</button> */}
                            </section>

                            <button type='submit' onClick={handleUpdate} className='bg-violet-700 hover:bg-violet-800 rounded p-4 text-sm w-full transition text-white' >Update</button>
                        </section>
                    </form>
                </section>
            </section>
        </section>
    )
}

export default Modal
