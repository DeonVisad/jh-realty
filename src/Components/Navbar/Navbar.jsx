import React, { useState } from 'react'
import NavItem from './NavItem/NavItem';

const Navbar = () => {
  
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <div className={navbar ? 'flex fixed justify-center items-center w-full h-16 drop-shadow-sm z-20 top-0 font-karla bg-zinc-900 text-white' : 'flex fixed justify-center items-center w-full h-16 drop-shadow-sm z-20 top-0 font-karla'}>
       <nav className='flex w-full justify-center'>
        <ul className='flex text-sm capitalize'>
            <NavItem />
        </ul>
       </nav>
    </div>
  )
}

export default Navbar