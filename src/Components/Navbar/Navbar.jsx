import React from 'react'
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {

  return (
    <div className='flex fixed justify-center items-center bg-white w-full h-16 drop-shadow-sm z-20 top-0'>
       <nav className='flex w-full justify-center'>
        <ul className='flex text-xs uppercase'>
            <NavItem />
        </ul>
       </nav>
    </div>
  )
}

export default Navbar