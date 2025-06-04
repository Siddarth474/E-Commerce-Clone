import React, {useContext} from 'react'
import FilterNavBar from '../components/FilterNavBar';
import Card from '../components/Card';
import {useNavigate} from 'react-router'
import { CategoryContext } from '../context/Context';

const Furniture = () => {
    const {sortedList, furniture} = useContext(CategoryContext);
    const navigate = useNavigate();

  return (
    <div className='my-3 sm:m-4 flex'>
        <section className='w-full text-black'>
            <FilterNavBar title={'Furniture'} list={furniture} />
            <div className='bg-white  flex flex-col gap-5 overflow-auto'>
                {sortedList.map((product) => (
                    <div key={product.id} onClick={() => {navigate(`/product/${product.id}` , {state: {item : product}})}}>
                       <Card item={product} warranty={'1 year'} /> 
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Furniture