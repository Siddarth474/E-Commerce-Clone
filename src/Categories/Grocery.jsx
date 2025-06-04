import React, { useContext } from 'react';
import FilterNavBar from '../components/FilterNavBar';
import Card from '../components/Card';
import {useNavigate} from 'react-router'
import { CategoryContext } from '../context/Context';

const Grocery = () => {
    const navigate = useNavigate();
    const {sortedList, grocery} = useContext(CategoryContext);
    
  return (
    <div className='my-3 sm:m-4 flex'>
        <section className='w-full text-black'>
            <FilterNavBar title={'Grocery'} list={grocery} />
            <div className='bg-white  flex flex-col gap-5 overflow-auto'>
                {sortedList.map((product) => (
                    <div key={product.id} onClick={() => {navigate(`/product/${product.id}` , {state: {item : product}})}}>
                       <Card item={product}  warranty={'2 Weeks'} />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Grocery