import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className='w-full sm:hidden bg-white flex justify-center items-center'>
        <div className='flex items-center max-w-[400px] w-full gap-2 bg-white mx-5 my-2
         p-1 rounded-xl border border-gray-400'>
            <IoIosSearch className='w-7 h-7' />
            <input type='text' placeholder='Search for Products' className='outline-0 w-full text-[15px]' />
        </div>
    </div>
  )
}

export default SearchBox