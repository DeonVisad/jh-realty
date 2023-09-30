import React from 'react';
import fpotc from '../../Assets/fpotc.gif'

import {BsInstagram, BsLinkedin, BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col w-full bg-zinc-900 relative bottom-0 text-white '>
        <div className='flex w-full justify-around items-center my-5'>
            <div className='flex flex-col'>
                <a href='https://www.fpotc.com' target='_blank' rel='noreferrer'><img src={fpotc} alt='First Properties of the Carolinas logo' className='w-24 md:w-48 h-auto' /></a>
            </div>
            <div className='flex flex-col text-end items-end'>
                <h1 className='font-karla md:text-xl uppercase font-semibold'>Jennifer Henderson</h1>
                <p className='underline font-karla cursor-pointer' onClick={(e) => {window.location.href ='mailto:jennifer.henderson@fpotc.com';}}>jennifer.henderson@fpotc.com</p>
                <div className='flex'>
                  <a className='m-2 text-xl cursor-pointer text-zinc-400 hover:text-white' rel='noreferrer'><BsInstagram /></a>
                  <a href='https://www.linkedin.com/in/jennifer-henderson-260849108/' target='_blank' rel='noreferrer' className='m-2 text-xl cursor-pointer text-zinc-400 hover:text-white'><BsLinkedin /></a>
                  <a href='https://www.facebook.com/FirstProperties/' target='_blank' rel='noreferrer' className='m-2 text-xl cursor-pointer text-zinc-400 hover:text-white'><BsFacebook /></a>
                </div>
                <div className='flex md:flex-col flex-col mt-2'>
                  <p className='font-karla'>Copyright<span> &copy;</span> 2023 |  <Link to='/privacy-policy' className='font-karla text-zinc-400 hover:text-white cursor-pointer'>Privacy Policy</Link></p>
                  <p>Powered By: Deon Davis</p>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer