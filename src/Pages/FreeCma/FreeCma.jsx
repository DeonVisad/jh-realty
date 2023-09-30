import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'

import welcome from '../../Assets/welcome.jpg'

const FreeCma = () => {
  return (
  <div name='freeCma' className='flex flex-col relative'>

    <div className='flex flex-col justify-center items-center '>
      <h1 className='absolute text-6xl z-[11] font-playfair text-white'>Get the Most Out of Your Home</h1>
      <p className='absolute font-karla z-[11] pt-52 uppercase text-white'>Unlock Your Property's True Worth with a CMA Today</p>
      <img src={welcome} className='max-h-[800px] w-full z-10 brightness-50' />
    </div>
    <div className='flex flex-col justify-center items-center m-8'>
      <h1 className='font-playfair text-2xl underline underline-offset-8 decoration-[#F05454] border-black'>What is a CMA?</h1>
      <p className='font-karla w-3/4 text-center mt-4 '>A Comparative Market Analysis (CMA) is a valuable tool in the world of real estate. It's a comprehensive report that real estate professionals create to help sellers determine the market value of their property. A CMA compares your property to similar ones that have recently sold in your area, considering factors like size, location, features, and current market conditions.</p>
      <p className='font-karla w-3/4 text-center mt-4'>To receive a free CMA please email me at: <span className='font-karla font-semibold cursor-pointer' onClick={(e) => {window.location.href='mailto:jhenderson7687@gmail.com'}}>Jennifer.Henderson@fpotc.com</span> with the subject 'FREE CMA' along with your address and anticipated sell date. You may also contact me <Link to='/contact' className='font-semibold underline'>here</Link></p>
    </div>

    <Footer />
  </div>
    
  )
}

export default FreeCma