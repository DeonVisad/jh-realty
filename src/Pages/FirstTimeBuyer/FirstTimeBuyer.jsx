import React from 'react';
import { Link } from 'react-router-dom';

import buyer from '../../Assets/townhome.jpg';
import Footer from '../../Components/Footer/Footer';
import charlotte from '../../Assets/charlotte.jpg'


const FirstTimeBuyer = () => {
  return (
    <div className='relative'>
    <article className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center w-3/4 mt-32'>
        <h1 className='font-playfair text-2xl underline underline-offset-8 decoration-[#F05454] border-black'>First Time Home Buyers</h1>
        <p className='font-karla w-3/4 text-center mt-4 '>Your first experience in the home buying process may seem overwhelming but it doesn't have to be.</p>
      </div>
      <div className='flex mt-8 justify-center'>
        <img src={buyer} className='w-3/4 max-h-[600px]'/>
      </div>
      <div className='md:w-1/2 w-3/4 my-8 flex flex-col font-karla text-justify'>
      
        <p className='leading-loose md:text-lg font-karla indent-6'>Buying your first home is an exciting journey, but it can also be a bit of a rollercoaster ride. Don't worry; we're here to guide you through the twists and turns with these 11 essential steps. Let's dive in!</p>

        <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 1: Assess Your Financial Situation </span>
        Before you dive into the world of house hunting, it's essential to have a clear picture of your financial health. Determine your budget, including how much you can afford for a down payment, monthly mortgage payments, property taxes, and insurance. Obtain a pre-approval from a lender to know exactly how much you can borrow.</p>

        <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 2: Find a Realtor </span>
        A knowledgeable and experienced real estate agent can be your best ally in the home-buying process. They will help you navigate the market, locate suitable properties, and negotiate on your behalf. Choose an agent who specializes in the area where you want to buy.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 3: Start House-Hunting </span>
    With your realtor by your side, begin your search for the perfect home. Consider factors like location, size, price range, and essential amenities. Visit potential properties to get a feel for them and narrow down your options.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 4: Make an Offer </span>
    When you've found a home that ticks most of your boxes, work with your realtor to draft an offer. This offer will include the purchase price, contingencies (conditions that must be met), and a proposed closing date. The seller can accept, reject, or counter your offer, which may require some negotiation.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 5: Conduct Inspections and Due Diligence </span>
    After your offer is accepted, it's time to dig deeper into the property. Schedule a home inspection to identify any potential issues or necessary repairs. Review all relevant documents, such as the seller's disclosures and property history. Don't forget to secure homeowner's insurance to protect your investment.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 6: Secure Financing </span>
    Finalize your mortgage application with your chosen lender. Provide any requested documentation, such as bank statements, pay stubs, and tax returns. The lender will also conduct an appraisal of the property to ensure its value aligns with the loan amount.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 6: Secure Financing </span>
    Finalize your mortgage application with your chosen lender. Provide any requested documentation, such as bank statements, pay stubs, and tax returns. The lender will also conduct an appraisal of the property to ensure its value aligns with the loan amount.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 7: Review and Sign Documents </span>
    Carefully review all the documents related to the purchase, including the purchase agreement, loan documents, and closing disclosures. If everything looks good, sign the necessary paperwork. Be sure to ask questions and seek clarification if needed.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 8: Perform a Final Walk-Through </span>
    A day or two before closing, conduct a final walk-through of the property to ensure it's in the condition agreed upon in the contract. This is your last chance to spot any unexpected issues.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 9: Closing </span>
    The big day has arrived! Schedule the closing meeting with a title company or attorney. During this meeting, you and the seller will sign the final paperwork. Be prepared to pay closing costs, which may include fees for the loan, title insurance, and other expenses. Once completed, you'll receive the keys to your new home and take possession.</p>

    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 10: Post-Closing Tasks </span>
    After closing, there are a few additional tasks to wrap up:
    <ul className='indent-3'>
    <li className=''>- Transfer utilities and services to your name.</li>
    <li class>- Update your address with the post office, banks, and other relevant organizations.</li>
    <li>- Start moving into your new home and celebrate your achievement!</li></ul></p>
    
    <p className='mt-5'><span className='font-semibold font-playfair text-xl'>Step 11: Enjoy Your New Home </span>
    Now that you're officially a homeowner, take time to settle into your new space and make it your own. Embrace the joys and responsibilities that come with homeownership, and don't hesitate to reach out to your real estate agent or lender if you have any questions or concerns.
In conclusion, buying a home is a significant milestone, and with the right guidance and knowledge, it can be a rewarding experience. By following these 11 essential steps, you'll be well-prepared to embark on your journey to homeownership with confidence and excitement. Happy house hunting!</p>

      </div>
    </article>
    <div className='flex w-full justify-center items-center'>
        <div className='absolute flex flex-col justify-center items-center z-[11] text-white w-full'>
          <h2 className='text-center text-xl md:text-4xl font-playfair '>Where Local Expertise & Passion Meet</h2>
          <div className='flex w-24 h-8 border-b-[1px] border-white'></div>
          <p className='font-karla text-center pt-6 text-md md:text-lg '>Please feel free to explore our website, and contact Jennifer with any questions you may have.</p>
          <Link to='/contact'><button className='h-12 w-36 border-white border-2 text-white text-xs font-karla mt-6 uppercase hover:bg-white hover:text-black'>Contact Me</button></Link>
        </div>
        <img src={charlotte} className='max-h-[800px] w-full brightness-50' /> 
      </div>
      <Footer />
    </div>
  )
}

export default FirstTimeBuyer