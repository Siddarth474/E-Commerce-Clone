import React from 'react'

const Card = ({item, warranty}) => {

    const Realprice = Math.floor(item.price * 85);
    const discount = Realprice * (item.discountPercentage)/100;
    const discountedPrice = Math.floor(Realprice - discount);

  return (
    <div className='flex justify-between p-2 gap-5 border-b border-gray-300'>
        <div className='flex gap-3'>
            <img src={item.thumbnail} className='w-[150px] h-[150px] my-2 sm:my-0 sm:w-[300px] sm:h-[300px]' alt={item.title} />
            <div className='max-w-[500px] my-2 sm:my-5'>
                <h1 className='text-lg sm:text-xl font-semibold capitalize hover:text-blue-500'>{item.title}</h1>
                <p className='mt-1 text-[14px] sm:text-[16px]'>
                    <span className='text-gray-500 font-semibold'>{(item.rating).toFixed(1)} ⭐</span>
                    <span className='ml-2 text-gray-500 font-semibold'>1k+ reviews</span>
                </p>
                <p className='font-semibold'>Brand: {item.brand ? item.brand : 'None'}</p>
                <p className='mt-3 hidden sm:block'>{item.description}</p>

                <div className='block mt-3 md:hidden'>
                    <div className='flex gap-2 text-[14px]'>
                        <p className='text-green-500 font-semibold'>{Math.floor(item.discountPercentage)}%</p>
                        <p className='line-through text-gray-500'>₹{Realprice}</p>
                        <p className='font-semibold'>₹{discountedPrice}</p>
                    </div>
                    <p className='text-gray-500 text-[14px]'>Warranty: {warranty}</p>
                </div>
            </div>
        </div>

        <div className=' hidden my-2 mr-10 sm:my-5 md:block '>
            <h1 className='text-2xl font-semibold'>₹{discountedPrice}</h1>
            <div className='flex mt-1 font-semibold gap-2 flex-wrap'>
                <p className='line-through text-gray-500'>₹{Realprice}</p>
                <p className='text-green-500'>{Math.floor(item.discountPercentage)}% Off</p>
            </div>
            <p className='text-gray-500'>Warranty: {warranty}</p>
            <p className='font-semibold'>In Stock: {item.stock}</p>
        </div>
    </div>
  )
}

export default Card