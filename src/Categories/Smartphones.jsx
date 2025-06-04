import React, { useContext } from 'react'
import { CategoryContext } from '../context/Context';
import Card from '../components/Card';
import FilterNavBar from '../components/FilterNavBar';
import {useNavigate} from 'react-router'

const Smartphones = () => {
    const {smartphones,sortedList} = useContext(CategoryContext);
    const navigate = useNavigate();

  return (
    <div className='my-3 sm:m-4 flex flex-col'>
        <section className='w-full text-black'>
            <FilterNavBar title={'Smartphones'} list={smartphones} />
            <div className='bg-white  flex flex-col gap-5 overflow-auto'>
                {sortedList.map((product) => {
                    const urlSafe = product.title.toLowerCase().replace(/\s+/g, '-');

                    return <div key={product.id} onClick={() => {navigate(`/product/${urlSafe}`, {state: {item : product}})}}>
                       <Card item={product}  warranty={'1 year'} />
                    </div>
                })}
            </div>
        </section>
    </div>
  )
}

export default Smartphones