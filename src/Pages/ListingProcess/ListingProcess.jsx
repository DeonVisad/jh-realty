import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import sale from '../../Assets/Sale.jpg';
import lake from '../../Assets/LakeMurray.jpg';

const ListingProcess = () => {
  return (
    <div name='/listingProcess' className='flex flex-col relative'>

      <div className='flex justify-center items-center '>
        <h1 className='absolute text-6xl z-[11] font-playfair text-white'>Sellers</h1>
        <img src={sale} className='max-h-[800px] w-full z-10 brightness-75' />
      </div>

      <div className='flex w-full justify-center items-center h-[400px]'>
        <div className='justify-center items-center w-full flex flex-col m-4'>
          <h2 className='font-playfair text-4xl text-center my-4'>Sell with Confidence, Ease and Success</h2>
          <p className='font-karla text-center text-lg'>With a decade of experience, you can be assured that selling your home will come with success, simplicity and understanding.</p>
        </div>
      </div>

      <div className={`flex w-full bg-zinc-900 justify-center`}>

        <div className='flex flex-col items-center w-3/4 md:1/2 justify-around mt-8'>
          <h1 className='text-4xl font-playfair text-white'>The Listing Process</h1>

          <div className='flex w-full justify-center items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>1</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Preparation and Pricing</h2>
              <p className='p-1 font-karla'>- Prepare your home for sale by decluttering and making necessary repairs.</p>
              <p className='p-1 font-karla'>- Determine a competitive listing price based on a comparative market analysis (CMA) provided by your realtor. Learn more <Link to='/freeCma' className='underline'>here.</Link></p>
            </div>
          </div>

          <div className='flex w-full justify-between items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>2</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Marketing and Showings</h2>
              <p className='p-1 font-karla'>- Collaborate with your realtor to market your property effectively, including online listings and open houses.</p>
              <p className='p-1 font-karla'>- Showcase your home to potential buyers through showings and virtual tours.</p>
            </div>
            
          </div>

          <div className='flex w-full justify-between items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>3</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Negotiation and Acceptance</h2>
              <p className='p-1 font-karla'>- Evaluate offers with your realtor, considering price, contingencies, and buyer qualifications.</p>
              <p className='p-1 font-karla'>- Negotiate terms and reach an agreement with the buyer.</p>
            </div>
          </div>

          <div className='flex w-full justify-between items-center m-5 p-8'>
            <h1 className='text-8xl font-playfair w-1/2 text-white pl-10'>4</h1>
            <div className='text-white md:w-1/2 flex flex-col justify-around items-around'>
              <h2 className='font-playfair font-semibold'>Closing Process</h2>
              <p className='p-1 font-karla'>- Open escrow and allow inspections and appraisals to take place.</p>
              <p className='p-1 font-karla'>- Review and finalize all necessary documents, including the closing disclosure and settlement statement.</p>
              <p className='p-1 font-karla'>- Attend the closing to sign documents and transfer ownership.</p>
            </div>
          </div>
          
          <div className='flex'>
            <h3 className='text-white font-karla md:text-lg my-3'>Need more information or a free CMA? Click <Link className='underline' to='/freeCma'>here</Link>.</h3>
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

export default ListingProcess