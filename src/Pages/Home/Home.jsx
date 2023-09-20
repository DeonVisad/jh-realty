import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import livingRoom from '../../Assets/livingRoom.jpg';
import MeetAgent from '../../Components/MeetAgent/MeetAgent';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {
  return (
    <div className='flex flex-col'>
        
        <div className='flex items-center justify-center transition-opacity ease-in-out duration-150'>
          <div className='absolute z-10 flex flex-col items-center w-full'>
            <h1 className='text-4xl md:text-6xl text-[#062A77] font-inter font-bold uppercase border-black'>Jennifer Henderson</h1>
            <h2 className='text-2xl text-[#062A77] font-dm uppercase pt-4'>A true real Estate experience</h2>
        </div>
          
          <img className='max-h-screen w-full' src={livingRoom}/>
        </div>
        <div className='flex h-screen'>
          <MeetAgent />
        </div>
        <div className='flex h-screen'>
          <Reviews />
        </div>
    </div>
  )
}

export default Home