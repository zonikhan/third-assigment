import React from 'react'
import Link from 'next/link'

const   Navbar = () => {
  return (
    <div className='bg-rose-600 h-12'>
        <div className='text-yellow-400 flex justify-between items-center'>

      <h1 className='text-x1 m-2 cursor-pointer'>Navbar</h1>

    <ul className='flex gap-3 mr-4 cursor-pointer'>
      <Link className='hover:text-blue-700' href= "/">Home</Link>
        <Link className='hover:text-green-400'  href= "/about">About</Link>
        <Link className='hover:text-orange-700' href= "/skill">Skills</Link>
        <Link className='hover:text-amber-700' href= "/contact">Contact</Link>




    </ul>
</div>


 
  
    
    
    </div>

  )
}

export default   Navbar
