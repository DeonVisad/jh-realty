import React, { useState } from 'react';
import houses from '../../Assets/kitchen.jpg';
import {GrNext, GrPrevious} from 'react-icons/gr';
import testimonials from './ReviewData.js';

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? testimonials.length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= testimonials.length ? 0 : newIndex);
    }
  return (
    <div name='testimonials' className='flex flex-col justify-center items-center w-full'>
        <div className='flex justify-between w-full absolute items-center z-10 md:px-8 pb-12'>
            <button className='md:text-2xl' onClick={handlePrevious}><GrPrevious /></button>
            <p className='md:text-2xl text-sm text-black drop-shadow-md font-dm font-semibold md:w-1/2'>{testimonials[index]}</p>
            <button className='md:text-2xl' onClick={handleNext}><GrNext /></button>
        </div>
        <div className='flex justify-center md:h-3/4 w-full md:pt-8'>
            <img className='w-full h-auto opacity-60' src={houses}/>
        </div>
    </div>
  )
}

export default Reviews