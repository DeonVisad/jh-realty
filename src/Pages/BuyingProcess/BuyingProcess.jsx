import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

import house from '../../Assets/house.jpg';
import lake from '../../Assets/LakeMurray.jpg';


const BuyingProcess = () => {
  return (
    <div name='/buyingprocess' className='flex flex-col relative'>

      <div className='flex justify-center items-center '>
        <h1 className='absolute text-6xl z-[11] font-playfair text-white'>Buyers</h1>
        <img src={house} className='max-h-[800px] w-full z-10 brightness-75' />
      </div>

      <div className='flex w-full justify-center items-center h-[400px]'>
        <div className='justify-center items-center w-full flex flex-col m-4'>
          <h2 className='font-playfair text-4xl text-center my-4'>Crafting Desire, Inspiring Trust: Where Your Journey to Ownership Begins.</h2>
          <p className='font-karla text-center text-lg'>As an expert in the surrounding Charlotte area and over 30 years of residency, no matter your experience in the home buying process; we will make your home a reality.</p>
        </div>
      </div>

      <div className={`flex w-full bg-zinc-900 justify-center`}>

        <div className='flex flex-col items-center w-3/4 md:1/2 justify-around mt-8'>
          <h1 className='text-4xl font-playfair text-white'>The Buying Process</h1>

          <div className='flex w-full justify-center items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>1</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Assess Your Financial Situation</h2>
              <p className='p-1 font-karla'>- Determine your budget and how much you can afford for a down payment, monthly mortgage payments, and other related costs.</p>
              <p className='p-1 font-karla'>- Review your credit report and credit score. Take steps to improve your credit if necessary.</p>
            </div>
          </div>

          <div className='flex w-full justify-between items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>2</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Get Pre-Approved for a Mortgage</h2>
              <p className='p-1 font-karla'>- Contact a mortgage lender or broker to get pre-approved for a mortgage loan. They will review your financial information to determine the loan amount you qualify for.</p>
              <p className='p-1 font-karla'>- More information on lenders can be found here: <a></a></p>
            </div>
            
          </div>

          <div className='flex w-full justify-between items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>3</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Start House-Hunting</h2>
              <p className='p-1 font-karla'>- Work with your realtor to search for homes that meet your criteria, such as location, size, price range, and amenities.</p>
              <p className='p-1 font-karla'>- Visit potential properties to get a feel for them and narrow down your choices.</p>
            </div>
          </div>

          <div className='flex w-full justify-between items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>4</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Make an Offer</h2>
              <p className='p-1 font-karla'>- Once you've found a home you like, your realtor will help you draft an offer. This includes the purchase price, contingencies, and a proposed closing date.</p>
              <p className='p-1 font-karla'>- The seller can either accept, reject, or counter your offer. Negotiations may be needed to reach an agreement.</p>
            </div>
          </div>
          
          <div className='flex'>
            <h3 className='text-white font-karla md:text-lg my-3'>First time home buyer and want to learn more? Click <Link className='underline' to='/firstTimeHomeBuyer'>here</Link>.</h3>
          </div>
        </div>
      </div>

      <div className='flex w-full justify-center items-center'>
        <div className='absolute flex flex-col justify-center items-center z-[11] text-white w-3/4'>
          <h2 className='text-center text-4xl font-playfair '>Where Local Expertise & Passion Meet</h2>
          <div className='flex w-24 h-8 border-b-[1px] border-white'></div>
          <p className='font-karla text-center pt-6 text-lg '>Please feel free to explore our website, and contact Jennifer with any questions you may have.</p>
          <Link to='/contact'><button className='h-12 w-36 border-white border-2 text-white text-xs font-karla mt-6 uppercase hover:bg-white hover:text-black'>Contact Me</button></Link>
        </div>
        <img src={lake} className='max-h-[800px] w-full brightness-50' /> 
      </div>
      <Footer />
    </div>
  )
}

export default BuyingProcess