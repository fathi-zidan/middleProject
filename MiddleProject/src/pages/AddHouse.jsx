import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import House from '../components/House';
import { useContext } from 'react';
import { HouseContext } from '../components/HouseContext';


function AddHouse() {
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

    const { houses, setHouses } = useContext(HouseContext);
    const navigate = useNavigate();

    const handleHouseSubmit = async (e) => {
        e.preventDefault();
        const newHouse = {
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
            const response = await axios.post('https://6559b7d66981238d054ccc29.mockapi.io/houses', newHouse);
            console.log('House added successfully!', response.data);
            setHouses([...houses, newHouse]);
            navigate('/');
            console.log(houses);
            // <Link to={`/property/${newHouse.id}`} ><House house={newHouse} /></Link>
        } catch (error) {
            console.error('Failed to add the house.', error);
        }
    }
    // console.log(nameRef.current.value)

    return (
        <section className='flex justify-between items-start gap-x-2 mt-3 ml-2 mr-2'>
            <section className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                <form className='flex item-start gap-x-2'>
                    <section className='flex flex-col gap-y-4 w-full'>
                        <h2 className="text-xl font-semibold text-center">House Information</h2>
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='House Name*' required ref={nameRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='House Image*' required ref={imageRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Type*' required ref={typeRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Country*' required ref={countryRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Address*' required ref={addressRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='BedRooms*' required ref={bedroomsRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='BathRooms*' required ref={bathroomsRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Surface*' required ref={surfaceRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Year*' required ref={yearRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Price*' required ref={priceRef} />
                        <textarea className='border border-gray-300 focus:border-violet-700 
                            outline-none resize-none rounded w-full p-4 h-36 text-sm' placeholder='Description*' required ref={descriptionRef} ></textarea>
                        <button type='submit' className='bg-violet-700 hover:bg-violet-800 rounded p-4 text-sm w-full transition text-white' onClick={handleHouseSubmit}>Add House</button>
                    </section>
                    <section className='flex flex-col gap-y-4 w-full'>
                        <h2 className="text-xl font-semibold text-center">Owner Information</h2>
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Owner Name*' required ref={ownerNameRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Phone*' required ref={ownerPhoneRef} />
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Image' ref={ownerImageRef} />
                        {/* <button className='bg-violet-700 hover:bg-violet-800 rounded p-4 text-sm w-full transition text-white'>Add House</button> */}
                    </section>
                </form>
            </section>
        </section>

    )
}

export default AddHouse
