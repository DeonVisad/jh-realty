import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import livingRoom from '../../Assets/livingRoom.jpg';
import MeetAgent from '../../Components/MeetAgent/MeetAgent';
import Reviews from '../../Components/Reviews/Reviews';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='flex flex-col relative'>
        
        <div className='flex items-center justify-center'>
          <div className='absolute z-10 flex flex-col justify-center items-center w-full'>
            <h1 className='text-2xl md:text-6xl text-[#062A77] pt-8 md:pt-4 font-inter font-bold uppercase flex text-center'>Jennifer Henderson</h1>
            <h2 className='md:text-2xl text-[#062A77] font-dm uppercase pt-4 text-center md:text-start'>A Transparent Real Estate Experience</h2>
        </div>
          
          <img className='max-h-screen w-full opacity-60 bg-black' src={livingRoom}/>
        </div>
        <div className='flex my-6'>
          <MeetAgent />
        </div>
        <div className='flex flex-col my-6'>
          <Reviews />
        </div>
        
        <Footer />
    </div>
  )
}

export default Home