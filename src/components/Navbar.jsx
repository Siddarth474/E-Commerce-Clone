import React, { useContext, useState } from 'react'
import flipkart_logo from '../assets/flipkart-logo-png-transparent.png'
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import {useNavigate} from 'react-router'
import { CategoryContext } from '../context/Context';

const Navbar = () => {
    const navigate = useNavigate();
    const {cartProducts, allProducts} = useContext(CategoryContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const filteredResult = allProducts.filter(product => {
            return product.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if(!filteredResult.length) return;
        return navigate(`/product/${filteredResult[0].id}` , {state: {item : filteredResult[0]}});
    }
    

  return (
    <nav className='w-full flex items-center bg-white text-black p-3 justify-between gap-2 sm:gap-4 '>
        <div className='flex items-center gap-10 max-w-[900px] w-full'>
            <img src={flipkart_logo} onClick={() => navigate(`/`)} alt='Flipkart' 
            className='cursor-pointer w-[100px] sm:w-[150px] ml-2 ' />
            <div className='hidden sm:flex items-center gap-3 py-2 px-3 bg-blue-100  w-full rounded-md '>
                <IoIosSearch className='w-7 h-7 text-gray-500' />
                <input type='text' value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
                placeholder='Search for Products, Brands & More' 
                className='text-[18px] w-full outline-0' />
            </div>
        </div>
        
        <div className='flex items-center gap-1 py-2 px-3 rounded-md cursor-pointer hover:bg-gray-100'>
            <HiOutlineUserCircle className='w-6 h-6 sm:w-7 sm:h-7' />
            <h1 className='text-[18px]'>You</h1>
        </div>
        <div onClick={() => navigate('/cart')} className='flex items-center gap-2 cursor-pointer '>
            <IoCartOutline className='w-6 h-6 sm:w-7 sm:h-7' />
            <p className='hidden lg:block text-[18px]'>Cart</p>
            <sup className='text-white text-center h-5 w-5 bg-red-500 
            font-semibold text-sm rounded-full'>{cartProducts.length}</sup>
        </div>
        <div onClick={() => navigate('/wishlist')} className='flex items-center gap-2 cursor-pointer'>
            <CiHeart className='w-6 h-6 sm:w-7 sm:h-7 text-rose-600' />
            <p className='hidden whitespace-nowrap lg:block text-[18px]'>Wishlist</p>
        </div>
        <div className='hidden mr-6 lg:block p-3 rounded-lg hover:bg-gray-100'>
            <PiDotsThreeVerticalLight className='w-6 h-6' />
        </div>
    </nav>
  )
}

export default Navbar