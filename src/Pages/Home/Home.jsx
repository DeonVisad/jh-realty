import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import livingRoom from '../../Assets/livingRoom.jpg';
import drone from '../../Assets/drone.mp4';
import MeetAgent from '../../Components/MeetAgent/MeetAgent';
import Reviews from '../../Components/Reviews/Reviews';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='flex flex-col relative'>
        
        <div className='flex items-center'>
          <div className='absolute z-10 flex flex-col items-center w-full'>
            <h1 className='text-2xl md:text-6xl text-black pt-8 md:pt-4 font-playfair font-semibold flex'>Jennifer Henderson</h1>
            <h2 className='md:text-lg text-black font-karla uppercase pt-4 text-center'>A Transparent Real Estate Experience</h2>
        </div>
          
          <video className='w-full opacity-75 bg-black' src={drone} autoPlay muted loop/>
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