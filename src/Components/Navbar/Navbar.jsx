import React from 'react'
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {

  return (
    <div className='flex fixed justify-center items-center w-full h-16 drop-shadow-sm z-20 top-0 font-karla'>
       <nav className='flex w-full justify-center'>
        <ul className='flex text-sm font-semibold uppercase'>
            <NavItem />
        </ul>
       </nav>
    </div>
  )
}

export default Navbar