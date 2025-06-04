import React from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className='bg-slate-800 text-white p-9 flex gap-3 items-center justify-center'>
        <FaGithub className='w-7 h-7' />
        <a href='https://github.com/Siddarth474' className='text-xl font-semibold '>Github : Siddarth474</a>
     </footer>
    </>
  )
}

export default Footer