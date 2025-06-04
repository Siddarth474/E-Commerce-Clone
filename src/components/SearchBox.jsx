import React ,{useState,useContext} from 'react'
import { IoIosSearch } from "react-icons/io";
import {useNavigate} from 'react-router';
import { CategoryContext } from '../context/Context';

const SearchBox = () => {

  const navigate = useNavigate();
    const {allProducts} = useContext(CategoryContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const filteredResult = allProducts.filter(product => {
            return product.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if(!filteredResult.length) return;
        return navigate(`/product/${filteredResult[0].id}` , {state: {item : filteredResult[0]}});
    }
  return (
    <div className='w-full sm:hidden bg-white flex justify-center items-center'>
        <div className='flex items-center max-w-[400px] w-full gap-2 bg-white mx-5 my-2
         p-1 rounded-xl border border-gray-400'>
            <IoIosSearch className='w-7 h-7' />
            <input type='text'value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
             placeholder='Search for Products' 
             className='outline-0 w-full text-[15px]' />
        </div>
    </div>
  )
}

export default SearchBox