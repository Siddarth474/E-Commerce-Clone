import React, {useContext } from 'react'
import FilterNavBar from '../components/filterNavBar';
import Card from '../components/Card';
import {useNavigate} from 'react-router'
import { CategoryContext } from '../context/Context';

const Laptops = () => {
    const {sortedList,laptops} = useContext(CategoryContext);
    const navigate = useNavigate();
    
  return (
        <div className='my-3 sm:m-4 flex'>
        <section className='w-full text-black '>
            <FilterNavBar title={'Electronics'} list={laptops} />
            <div className='bg-white  flex flex-col gap-5 overflow-auto'>
                {sortedList.map((product) => (
                    <div key={product.id} onClick={() => {navigate(`/product/${product.id}` , {state: {item : product}})}}>
                       <Card item={product}  warranty={'2 years'} />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Laptops