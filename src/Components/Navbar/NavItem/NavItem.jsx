import React, { useState, useEffect } from 'react';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    const [openSell, setOpenSell] = useState(false)
    const closeHandler = () => {
     setOpen(false);
     setOpenSell(false);
    }
    useEffect(() => {
      document.addEventListener('mousedown', closeHandler)
    })

  return (
    <div className='flex font-karla'>
            <Link to='/'><li className='px-4 cursor-pointer hover:text-white'>Home</li></Link>
            <li className='px-4 cursor-pointer hover:text-white'><Scroll to='meetAgent' smooth={true} offset={-70}>Meet Jennifer</Scroll></li>
            <li className='px-4 cursor-pointer hover:text-white'><Scroll to='testimonials' smooth={true} offset={100}>Testimonials</Scroll></li>
            <li className='px-4 cursor-pointer hover:text-white h-10vh' onMouseEnter={() => setOpen(true) & setOpenSell(false)} >Buy
              {open ? <div className='flex absolute top-12 bg-black/50 text-white h-20 w-40 px-2 justify-center
              items-center'> 
                <ul>
                    <li className='hover:text-[#F05454] cursor-pointer'>Buying Process</li>
                    <li className='hover:text-[#F05454] cursor-pointer'>First Time Home Buyer</li>
                </ul>
                </div> : null}
            </li>
            
            <li className='px-4 cursor-pointer hover:text-white' onMouseEnter={() => setOpenSell(true) & setOpen(false)}>Sell
            {openSell ? <div className='flex absolute top-12 bg-black/50 text-white h-20 w-36 justify-center
            items-center transition '> 
                <ul className=''>
                    <li className='hover:text-[#F05454] cursor-pointer'>Listing Process</li>
                    <li className='hover:text-[#F05454] cursor-pointer'>FREE CMA</li>
                </ul>
            </div> : null}</li>
            <li className='px-4 cursor-pointer hover:text-white'>Contact</li>
    </div>
  )
}

export default NavItem