import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='flex items-end justify-between text-white px-5 py-3'>
        
        <h1 className='text-2xl font-small'>
        <FontAwesomeIcon icon={faUser} className="text-green-500 text-2xl px-2 py-1" />Hello <br /> <span className='text-3xl font-semibold'>Mahetab</span> 👋</h1>
     <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Log Out</button>
    </div>
  )
}

export default Header