import React from 'react';
import './Contact.css';
import {BsPhone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai';
import {FiMapPin} from 'react-icons/fi';
import Footer from '../../Components/Footer/Footer';

import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

  return (
    <div className='background md:h-screen md:pb-0 pb-4 flex flex-col justify-center z-10'>
      <div className='flex flex-col md:flex-row md:items-start items-start md:justify-around mt-20 ml-6 z-11'>
        <div className='flex flex-col items-start border-white text-white'>
          <h1 className='md:text-5xl font-playfair mb-3 mr-2'>Contact Details</h1>
          <div className='flex uppercase font-karla justify-around'>
            <span className='text-3xl'><BsPhone /></span>
            <div className='flex flex-col ml-4 '>
              <p className='font-semibold'>Phone</p>
              <p className='hover:underline cursor-pointer' onClick={() => {window.location.href='tel:7045077380'}}>704-507-7380</p>
            </div>
          </div>


          <div className='flex uppercase font-karla justify-around'>
            <span className='text-3xl'><AiOutlineMail /></span>
            <div className='flex flex-col ml-4 '>
              <p className='font-semibold'>Email</p>
              <p className='cursor-pointer hover:underline' onClick={() => {window.location.href='mailto:jhenderson7687@gmail.com'}}>jennifer.henderson@fpotc.com</p>
            </div>
          </div>

          <div className='flex uppercase font-karla justify-around'>
            <span className='text-3xl'><FiMapPin /></span>
            <div className='flex flex-col ml-4 '>
              <p className='font-semibold'>Address</p>
              <p>1 Executive Ct.</p>
              <p>Lake Wylie, SC</p>
              <p>29710</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start md:border-l-2 border-white md:w-1/2'>
          <h1 className='md:ml-3 md:text-5xl mt-4 md:mt-0 text-white font-playfair font-semibold'>Submit a Message</h1>
          <div>
            <form action='https://getform.io/f/a6304a38-aa5c-419c-b219-baa53cd184a6' method='POST'>
              <div className='flex flex-col md:ml-3 md:mt-3 font-karla uppercase'>
                <label htmlFor='name' className='text-white'>Name</label>
                <input type='text' name='name' required className='bg-black/0 border-b-[1px] h-8 w-3/4 text-white focus:border-b-[1px] focus:outline-none'/>
              </div>
              <div className='flex flex-col md:ml-3 md:mt-3 font-karla uppercase'>
                <label htmlFor='email' className='text-white' >Email</label>
                <input type='email' name='email' required className='bg-black/0 border-b-[1px] h-8 w-3/4 text-white focus:border-b-[1px] focus:outline-none'/>
              </div>
              <div className='flex flex-col md:ml-3 md:mt-10 text-white font-karla uppercase'>
                <label htmlFor='email' className='text-white' >Message</label>
                <textarea type='email' name='email' required className='bg-black/10 border-2 border-white h-40 w-3/4'/>
                <p className='text-xs font-karla text-white w-3/4 m-4'>By providing Jennifer Henderson your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</p>
                <input type="hidden" name="_gotcha" className='display-none' />
                <button className='text-white md:text-2xl font-karla px-7 py-4 border-2 border-white hover:bg-black w-3/4'>SUBMIT</button>
                <ReCAPTCHA required className='mt-2' sitekey={process.env.REACT_APP_SITE_KEY}/>
              </div>
              
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact