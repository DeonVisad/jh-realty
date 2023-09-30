import React, { useState, useEffect } from 'react';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    const [openSell, setOpenSell] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const mobileHandler = () => {
      setMobileNav(!mobileNav);
    }

    const closeHandler = () => {
     setOpen(false);
     setOpenSell(false);
    }
    useEffect(() => {
      document.addEventListener('click', closeHandler)
    })

  return (
    <div className='flex font-karla'>
            {/* DESKTOP NAVIGATION */}
            <div className='md:flex hidden'>
            <Link to='/'><li className='px-4 cursor-pointer hover:text-white'>Home</li></Link>
            <li className='px-4 cursor-pointer hover:text-white'><Scroll to='meetAgent' smooth={true} offset={-70}><Link to=''>Meet Jennifer</Link></Scroll></li>
            <li className='px-4 cursor-pointer hover:text-white'><Scroll to='testimonials' smooth={true} offset={100}><Link to=''>Testimonials</Link></Scroll></li>
            <li className='px-4 cursor-pointer hover:text-white h-10vh' onMouseEnter={() => setOpen(true) & setOpenSell(false)} ><Link to='/buyingprocess'>Buy</Link>
              {open ? <div className='flex absolute top-12 bg-black/50 text-white h-20 w-40 px-2 justify-center
              items-center'> 
                <ul>
                    <Link to='/buyingprocess'><li className='hover:text-[#F05454] cursor-pointer'>Buying Process</li></Link>
                    <Link to='/firstTimeHomeBuyer'><li className='hover:text-[#F05454] cursor-pointer'>First Time Home Buyer</li></Link>
                </ul>
                </div> : null}
            </li>
            
            <li className='px-4 cursor-pointer hover:text-white' onMouseEnter={() => setOpenSell(true) & setOpen(false)}><Link to='/listingProcess'>Sell</Link>
            {openSell ? <div className='flex absolute top-12 bg-black/50 text-white h-20 w-36 justify-center
            items-center transition '> 
                <ul className=''>
                    <Link to='/listingProcess'><li className='hover:text-[#F05454] cursor-pointer'>Listing Process</li></Link>
                    <Link to='/freeCma'><li className='hover:text-[#F05454] cursor-pointer'>FREE CMA</li></Link>
                </ul>
            </div> : null}</li>
            <Link to='/contact'><li className='px-4 cursor-pointer hover:text-white'>Contact</li></Link>
            </div>

            {/* MOBILE NAVIGATION */}
            <div className='md:hidden flex'>
              <div className='cursor-pointer text-2xl absolute right-0 z-30 pr-10' onClick={mobileHandler}>
                {mobileNav ? <AiOutlineClose className='text-white' /> : <GiHamburgerMenu /> }
              </div>
              <div className={mobileNav ? 'flex flex-col absolute top-0 h-screen w-full bg-zinc-900' : 'hidden'}>
                <div className='flex flex-col h-screen justify-center items-around text-xl font-playfair text-zinc-400 ' onClick={mobileHandler}>
                <Link to='/'><li className='px-4 py-2 cursor-pointer hover:text-[#F05454] hover:underline hover:underline-offset-4'>Home</li></Link>
                <Link to='/buyingprocess'><li className='px-4 py-2 hover:text-[#F05454] cursor-pointe hover:underline hover:underline-offset-4'>Buying Process</li></Link>
                <Link to='/firstTimeHomeBuyer'><li className='px-4 py-2 hover:text-[#F05454] cursor-pointer hover:underline hover:underline-offset-4'>First Time Buyer</li></Link>
                <Link to='/listingProcess'><li className='px-4 py-2 hover:text-[#F05454] cursor-pointer hover:underline hover:underline-offset-4'>Listing Process</li></Link>
                <Link to='/freeCma'><li className='px-4 py-2 hover:text-[#F05454] cursor-pointer hover:underline hover:underline-offset-4'>FREE CMA</li></Link>
                </div>
              </div>
            </div>
    </div>
  )
}

export default NavItem