import React , {useContext, useEffect, useState} from 'react'
import { CategoryContext } from '../context/Context'

const FilterNavBar = ({title, list}) => {

    const {setSortedList} = useContext(CategoryContext);
    const [sortOrder, setSortOrder] = useState('');
    const [highlight, setHighLight] = useState('');

    useEffect(() => {
        let sorted = [...list];
        if(sortOrder === 'LowHigh') sorted.sort((a,b) => a.price - b.price);
        else if(sortOrder === 'HighLow') sorted.sort((a,b) => b.price - a.price);
        else if(sortOrder === 'Low-Rating') sorted.sort((a,b) => a.rating - b.rating);
        else if(sortOrder === 'High-Rating') sorted.sort((a,b) => b.rating - a.rating);
        else setSortedList(sorted);

        setSortedList(sorted);
    } , [list, sortOrder]); 


  return (
        <div className='py-3 px-5 bg-white border-b border-gray-300 overflow-auto'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <p className='hidden sm:block text-sm
                     text-gray-500'>(Showing 1-{list.length} products of {list.length} products)</p>
                </div>

                <div className='hidden sm:flex items-center gap-6 mt-3'>
                    <p onClick={() => {setSortOrder(''), setHighLight('');}} className='font-semibold cursor-default'>Sort By</p>

                    <p onClick={() => {setSortOrder('High-Rating'), setHighLight('rating') }} 
                    className={`${highlight === 'rating' ? 'text-blue-500 font-semibold border-b-2' : 'text-black'}
                     cursor-pointer hover:text-blue-500`}>Popularity</p>

                    <p onClick={() => {setSortOrder('LowHigh'), setHighLight('Low')}} 
                    className={`${highlight === 'Low' ? 'text-blue-500 font-semibold border-b-2' : 'text-black'}
                     cursor-pointer hover:text-blue-500`}>Price--Low to High</p> 

                    <p onClick={() => {setSortOrder('HighLow'), setHighLight('High') }} 
                    className={`${highlight === 'High' ? 'text-blue-500 font-semibold border-b-2' : 'text-black'}
                     cursor-pointer hover:text-blue-500`}>Price--High to Low</p>
                </div>
                
                <div className='flex gap-5 overflow-auto mt-3 sm:hidden'>
                    <select onChange={(e) => setSortOrder(e.target.value)} 
                    className='py-1 px-2 border text-[14px] rounded-full outline-0'>
                        <option hidden>Price</option>
                        <option value='HighLow'>High to Low</option>
                        <option value='LowHigh'>Low to High</option>
                        <option value='none'>None</option>
                    </select>
                    <select onChange={(e) => setSortOrder(e.target.value)} 
                    className='py-1 px-2 border text-[14px] rounded-full outline-0'>
                        <option hidden>Ratings</option>
                        <option value='High-Rating' >Highest</option>
                        <option value='Low-Rating' >Lowest</option>
                        <option value='none'>None</option>
                    </select>
                </div>
            </div>
  )
}

export default FilterNavBar