import React, { useState, useEffect } from 'react'

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
    <div className='flex'>
            <li className='px-4 cursor-pointer hover:text-[#F05454]'>Home</li>
            <li className='px-4 cursor-pointer hover:text-[#F05454]'>Meet Jennifer</li>
            <li className='px-4 cursor-pointer hover:text-[#F05454]'>Testimonials</li>
            <li className='px-4 cursor-pointer hover:text-[#F05454] ' onClick={() => setOpen(!open) & setOpenSell(false)}>Buy
            {open ? <div className='flex absolute top-16 bg-[#121212] text-white h-20 w-40 justify-center
            items-center'> 
                <ul>
                    <li className='hover:text-[#F05454] cursor-pointer'>Buying Process</li>
                    <li className='hover:text-[#F05454] cursor-pointer'>First Time Home Buyer</li>
                </ul>
            </div> : null}
            </li>
            <li className='px-4 cursor-pointer hover:text-[#F05454]' onClick={() => setOpenSell(!openSell) & setOpen(false)}>Sell
            {openSell ? <div className='flex absolute top-16 bg-[#121212] text-white h-20 w-36 justify-center
            items-center transition '> 
                <ul className=''>
                    <li className='hover:text-[#F05454] cursor-pointer'>Listing Process</li>
                    <li className='hover:text-[#F05454] cursor-pointer'>FREE CMA</li>
                </ul>
            </div> : null}</li>
            <li className='px-4 cursor-pointer hover:text-[#F05454]'>Contact</li>
    </div>
  )
}

export default NavItem