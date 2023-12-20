import React, { useContext, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { HouseContext } from '../components/HouseContext'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import axios from 'axios'
import Modal from '../components/Modal';
import { CiCircleAlert } from "react-icons/ci";
import ToastContextProvider, { toastContext } from '../components/ToastContext';



function PropertyDetails() {
    const { houses,setHouses } = useContext(HouseContext);
    const navigate = useNavigate()
    const { id } = useParams();
    // console.log(id)
    const house = houses.find((house) => house.id == id);
    // console.log(house)
    const {openT} = useContext(toastContext);

    const [open,setOpen] = useState(false);

    const handleDelete = async () => {
        try {
          await axios.delete(`https://6559b7d66981238d054ccc29.mockapi.io/houses/${house.id}`);
    
          // Update the houses state after successful deletion
          setHouses((prevHouses) => prevHouses.filter((h) => h.id !== parseInt(house.id)));
    
          console.log('House deleted successfully');
          navigate("/")
        } catch (error) {
          console.error('Failed to delete house:', error);
        }
      };

      const handleSend = (e)=>{
        e.preventDefault();
        openT(
            <div className='flex gap-2 bg-violet-900 text-white p-4 rounded-lg shadow-lg'>
                <CiCircleAlert size={40}/>
                <h3 className='font-bold'>Message Sent</h3>
            </div>
        )

      }

    return (
        <section>
            <div className='container mx-auto min-h-[800px] mb-14'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold'>{house?.name}</h2>
                        <h3 className='text-lg mb-4'>{house?.address}</h3>
                    </div>
                    <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                        <div className='bg-green-500 text-white px-3 rounded-full'>{house?.type} </div>
                        <div className='bg-violet-500 text-white px-3 rounded-full'>{house?.country}</div>
                    </div>
                    <div className='text-3xl font-semibold text-violet-600'>${house?.price}</div>
                </div>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={house?.image} alt={house?.name} />
                        </div>
                        <div className='flex gap-x-6 text-violet-700 mb-6'>
                            <div className='flex gap-x-2 items-center'>
                                <BiBed className='text-2xl' />
                                <div>{house?.bedrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiBath className='text-2xl' />
                                <div>{house?.bathrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiArea className='text-2xl' />
                                <div>{house?.surface}</div>
                            </div>
                        </div>
                        <div>{house?.description}</div>

                    </div>
                    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                                <img className='rounded-lg' src={house?.agent?.image} alt={house?.agent?.name} />
                            </div>
                            <div>
                                <div className='font-bold text-lg'>{house?.agent?.name}</div>
                                <Link to='' className='text-violet-700 text-sm'>View Listing</Link>
                            </div>
                        </div>
                        {/* form*/}
                        <form className='flex flex-col gap-y-4'>
                            <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Name*' />
                            <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Email*' />
                            <input className='border border-gray-300 focus:border-violet-700 outline-none
                            rounded w-full px-4 h-14 text-sm' type="text" placeholder='Phone*' />
                            <textarea className='border border-gray-300 focus:border-violet-700 
                            outline-none resize-none rounded w-full p-4 h-36 text-sm' placeholder='Message*' ></textarea>
                            <div className='flex-col'>
                                <button onClick={handleSend} className='bg-violet-700 hover:bg-violet-800 rounded p-4 text-sm w-full transition text-white'>Send Message</button>
                                <button className='bg-violet-700 hover:bg-violet-800 rounded p-4 text-sm w-full transition text-white mt-2'>Call</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-center gap-x-3'>
                <button onClick={handleDelete}  className=" flex items-center justify-center gap-x-1 py-4 px-4 bg-violet-600 text-white  font-bold rounded-md mb-10 hover:bg-violet-700"><MdDelete/>Delete</button>
                <button onClick={()=>setOpen(!open)}  className="flex items-center justify-center gap-x-1 py-4 px-4 bg-violet-600 text-white font-bold rounded-md mb-10  hover:bg-violet-700"><GrDocumentUpdate/>Update</button>
                {open && <Modal setClose={setOpen} house = {house} />}
            </div>


        </section>
    )
}

export default PropertyDetails
