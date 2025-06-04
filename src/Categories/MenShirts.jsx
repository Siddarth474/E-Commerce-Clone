import React,{useContext} from 'react'
import { CategoryContext } from '../context/Context'
import FilterNavBar from '../components/FilterNavBar';
import Card from '../components/Card';
import {useNavigate} from 'react-router'

const MenShirts = () => {
    const {menShirts,sortedList} = useContext(CategoryContext);
    const navigate = useNavigate();
    
  return (
    <div className='my-3 sm:m-4 flex'>
        <section className='w-full text-black'>
            <FilterNavBar title={'Fashion'} list={menShirts} />
            <div className='bg-white  flex flex-col gap-5 overflow-auto'>
                {sortedList.map((product) => {
                    const urlSafe = product.title.toLowerCase().replace(/\s+/g, '-');

                    return <div key={product.id} onClick={() => {navigate(`/product/${urlSafe}` , {state: {item : product}})}}>
                       <Card item={product}  warranty={'6 Months'} />
                    </div>
                })}
            </div>
        </section>
    </div>
  )
}

export default MenShirts