import React, { useState } from 'react'

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const testimonials = ['nice', 'to', 'see', 'you'];

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? testimonials.length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= testimonials.length ? 0 : newIndex);
    }
  return (
    <div className='flex justify-center items-center w-full'>
        <button onClick={handlePrevious}>Previous</button>
        <p>{testimonials[index]}</p>
        <button onClick={handleNext}>Next</button>
        
    </div>
  )
}

export default Reviews