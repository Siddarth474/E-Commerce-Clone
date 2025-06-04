import React, { useContext} from 'react'
import { CategoryContext } from '../context/Context';
import {useNavigate} from 'react-router';

const ProductList = () => {
    const {menShirts,smartphones,decoration} = useContext(CategoryContext);
    const navigate = useNavigate();

  return (
    <div>
        <section className='mb-7 bg-white p-5'>
            <h2 className="text-2xl font-bold mb-3">Smartphones</h2>
            <div className='flex items-center gap-4 overflow-auto cursor-pointer'>
                {smartphones.map(product => (
                    <div key={product.id} onClick={() => {navigate(`/product/${product.id}` , {state: {item : product}})}} 
                    className='min-w-[250px] flex flex-col justify-center items-center'>
                        <img src={product.thumbnail} className='w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]
                        object-contain hover:scale-105 duration-100' alt={product.title}  />
                        <h1 className='text-md sm:text-lg'>{product.title}</h1>
                        <p className='text-md font-semibold mt-1'>At ₹{Math.floor(product.price * 85)}*</p>
                    </div>
                ))}
            </div>
        </section> 

        <section className='mb-7 bg-white p-5'>
            <h2 className="text-2xl font-bold mb-3">Men's Fashion</h2>
            <div className='flex items-center justify-evenly gap-4 overflow-auto cursor-pointer'>
                {menShirts.map(product => (
                    <div key={product.id} onClick={() => {navigate(`/product/${product.id}` , {state: {item : product}})}} 
                    className='min-w-[250px] flex flex-col justify-center items-center'>
                        <img src={product.thumbnail} className='w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] 
                        object-contain hover:scale-105 duration-100' alt={product.title}  />
                        <h1 className='text-md sm:text-lg'>{product.title}</h1>
                        <p className='text-md font-semibold mt-1'>At ₹{Math.floor(product.price * 85)}*</p>
                    </div>
                ))}
            </div>
        </section>

        <section className='mb-7 bg-white p-5'>
            <h2 className="text-2xl font-bold mb-3">Home Decoration</h2>
            <div className='flex items-center justify-evenly gap-4 overflow-auto cursor-pointer'>
                {decoration.map(product => (
                    <div key={product.id} onClick={() => {navigate(`/product/${product.id}` , {state: {item : product}})}}
                    className='min-w-[250px] flex flex-col justify-center items-center'>
                        <img src={product.thumbnail} className='w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] 
                        object-contain hover:scale-105 duration-100' alt={product.title} />
                        <h1 className='text-md sm:text-lg'>{product.title}</h1>
                        <p className='text-md font-semibold mt-1'>At ₹{Math.floor(product.price * 85)}*</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ProductList