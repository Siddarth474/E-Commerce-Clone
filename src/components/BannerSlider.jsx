import React, { useEffect, useState } from 'react'
import { slider_images } from '../assets/Image'

const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % slider_images.length);
    }
    
    const prev = () => {
        setIndex((prev) => (prev - 1 + slider_images.length) % slider_images.length);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slider_images.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
    
  return (
    <div className='my-3 sm:my-5 relative w-full overflow-hidden '>
        <div className='flex transition-transform duration-500 ease-in-out'
        style={{transform : `translate(-${index * 100}%)`}}>
            {slider_images.map((img,index) => (
                <img key={index} onClick={next} src={img} className='w-full' alt='banner'/>
            ))}
        </div>
        <button onClick={prev} className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2
         bg-gray-300 text-black text-4xl p-4 rounded-r-lg cursor-pointer">‹</button>
        <button onClick={next} className=" hidden md:block absolute right-0 top-1/2 -translate-y-1/2
        bg-gray-300 text-black text-4xl p-4 rounded-l-lg cursor-pointer">›</button>
    </div>
  )
}

export default BannerSlider