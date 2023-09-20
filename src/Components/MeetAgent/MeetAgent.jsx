import React from 'react';
import portrait from '../../Assets/Jennifer.png';

const MeetAgent = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full '>
        <h2 className='text-5xl font-inter font-bold text-[#062A77]'>MEET JENNIFER</h2>
        
        <div className='flex justify-around items-center w-3/4 mt-20'>
            <div className='flex flex-col items-center'>
                <img className='h-96 w-96 rounded-full' src={portrait} />
                <p className='underline cursor-pointer'>(777)-777-7777</p>
                <p className='underline cursor-pointer'>jennifer.henderson@fpotc.com</p>
            </div>
            <div className='w-1/2 mx-3'>
                <p className='font-inter'>
                If you like attention to detail, Jennifer is your person. She works with all kinds of buyers and sellers but she excels with international relocations. She is a native of North Carolina and has lived in the Charlotte area for over 30 years. 
                Her attention to detail, organizational skills, and knowledge of the area make her perfect for helping clients get through the buying and selling process smoothly. She and her husband Tim have raised 6 children in the community. She is a licensed Real Estate Agent in NC & SC and holds a degree in accounting. When she is not working, she is spending time traveling with Tim and her family.
                </p>
                <button className='h-12 w-36 rounded-full bg-[#990001] text-white text-sm font-inter mt-6'>Contact Jennifer</button>
            </div>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default MeetAgent