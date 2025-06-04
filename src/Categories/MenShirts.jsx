import React,{useContext} from 'react'
import { CategoryContext } from '../context/Context'
import FilterNavBar from '../components/filterNavBar';
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
                {sortedList.map((product) => (
                    <div key={product.id} onClick={() => {navigate(`/product/${product.id}` , {state: {item : product}})}}>
                       <Card item={product}  warranty={'6 Months'} />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default MenShirts