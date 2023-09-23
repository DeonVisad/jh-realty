import React from 'react';
import fpotc from '../../Assets/fpotc.gif'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col w-full bg-black absolute bottom-0 text-white '>
        <div className='flex w-full justify-around items-center my-5'>
            <div className='flex'>
                <img src={fpotc} className='w-24 h-auto' />
            </div>
            <div className='flex flex-col text-end'>
                <h1 className='font-karla md:text-2xl uppercase font-semibold'>Jennifer Henderson</h1>
                <p className='underline font-karla cursor-pointer' onClick={(e) => {window.location.href ='mailto:jennifer.henderson@fpotc.com';}}>jennifer.henderson@fpotc.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer