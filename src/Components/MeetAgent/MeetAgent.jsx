import React from 'react';
import portrait from '../../Assets/Jennifer.png';

const MeetAgent = () => {
  return (
    <div name='meetAgent' id='#meetAgent' className='flex flex-col justify-center items-center w-full '>
        <h2 className='md:text-4xl text-3xl font-playfair text-black text-center'>5 Stars on Realtor.com</h2>
        
        <div className='flex md:flex-row flex-col justify-around items-center w-3/4 md:mt-20 my-5'>
            <div className='flex flex-col items-between w-full my-5 font-karla'>
                <img className='h-72 w-72  mb-5 ' src={portrait} alt='Jennifer Henderson' />
                <p className='underline cursor-pointer hover:font-semibold' onClick={(e) => {document.location.href='tel:+17045077380'}}>(704)-507-7380</p>
                <p className='underline cursor-pointer hover:font-semibold' onClick={(e) => {window.location.href='mailto:jhenderson7687@gmail.com'}}>jennifer.henderson@fpotc.com</p>
            </div>
            <div className='w-full text-sm md:ml-6'>
                <h2 className='text-3xl font-playfair mb-4 '>Jennifer Henderson: Local real estate expert</h2>
                <p className='font-karla'>
                If you like attention to detail, Jennifer is your person. She works with all kinds of buyers and sellers but she excels with international relocations. She is a native of North Carolina and has lived in the Charlotte area for over 30 years. 
                Her attention to detail, organizational skills, and knowledge of the area make her perfect for helping clients get through the buying and selling process smoothly. She and her husband Tim have raised 6 children in the community. She is a licensed Real Estate Agent in NC & SC and holds a degree in accounting. When she is not working, she is spending time traveling with Tim and her family.
                </p>
                <div className='flex flex-row items-center'>
                  <button className='h-12 w-36 border-black border-2 text-black text-xs font-karla mt-6 uppercase hover:bg-black hover:text-white' onClick={(e) => {window.location.href='mailto:jhenderson7687@gmail.com'}}>Contact Me</button> 
                  <a href='https://www.realtor.com/realestateagents/jennifer-henderson_lake-wylie_sc_2181992_' rel='noreferrer' target='_blank'><button className='h-12 w-36 ml-4  text-black text-xs font-karla mt-6 uppercase hover:font-semibold'>Check Out My Reviews</button></a>
                </div>
            </div>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default MeetAgent