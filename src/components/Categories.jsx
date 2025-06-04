import React from 'react'
import { category_Data } from '../assets/Image'
import {useNavigate} from 'react-router'

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className='sm:my-2 flex items-center justify-evenly gap-6 p-6 overflow-auto bg-white'>
        { 
            category_Data.map((i,index) => {
                return <div key={index} onClick={() => navigate(`/category/${index + 1}`)} 
                className='min-w-18 flex flex-col shrink-0 items-center justify-center cursor-pointer'>
                            <img src={i.image} className='w-13 h-13 sm:w-16 sm:h-16 object-contain' alt={i.name} />
                            <h1 className='text-[14px] sm:font-semibold sm:text-[16px]'>{i.name}</h1>
                      </div>
            })
        }
    </div>
  )
}

export default Categories