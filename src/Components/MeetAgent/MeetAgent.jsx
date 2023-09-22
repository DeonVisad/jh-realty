import React from 'react';
import portrait from '../../Assets/Jennifer.png';

const MeetAgent = () => {
  return (
    <div name='meetAgent' className='flex flex-col justify-center items-center w-full '>
        <h2 className='md:text-5xl text-4xl font-inter font-bold text-[#062A77] text-center'>MEET JENNIFER</h2>
        
        <div className='flex md:flex-row flex-col justify-around items-center w-3/4 md:mt-20 my-5'>
            <div className='flex flex-col items-center my-5'>
                <img className='h-72 w-72 md:h-96 md:w-96 rounded-full mb-5' src={portrait} />
                <p className='underline cursor-pointer' onClick={window.open('tel:7045077380')}>(777)-777-7777</p>
                <p className='underline cursor-pointer' onClick={(e) => {window.location.href='mailto:jennifer.henderson@fpotc.com'}}>jennifer.henderson@fpotc.com</p>
            </div>
            <div className='w-full text-sm md:text-lg md:w-1/2 md:mx-3'>
                <p className='font-inter'>
                If you like attention to detail, Jennifer is your person. She works with all kinds of buyers and sellers but she excels with international relocations. She is a native of North Carolina and has lived in the Charlotte area for over 30 years. 
                Her attention to detail, organizational skills, and knowledge of the area make her perfect for helping clients get through the buying and selling process smoothly. She and her husband Tim have raised 6 children in the community. She is a licensed Real Estate Agent in NC & SC and holds a degree in accounting. When she is not working, she is spending time traveling with Tim and her family.
                </p>
                <button className='h-12 w-36 rounded-full bg-[#990001] text-white text-sm font-inter mt-6' onClick={(e) => {window.location.href='mailto:jennifer.henderson@fpotc.com'}}>Contact Jennifer</button>
            </div>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default MeetAgent