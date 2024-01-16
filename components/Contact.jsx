import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section className='py-5 mt-10'>
      <div className='flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0'>
        <div>
          <div className='text-[#734B33] text-center lg:text-start'>
            <h2 className='text-4xl lg:text-[64px]'>Contact Us</h2>
            <p className='text-md:text-[20px] max-w-[500px] mt-2 lg:mt-4'>Need to get in touch with us? Either fill out the form with your inquiry or find the department!</p>
          </div>
          <div>
            <Image src='/images/contact.png' width={400} height={400} alt=''/>
          </div>
        </div>
        <form className='flex flex-col gap-y-4 px-4 mx-auto lg:mx-0 mt-6 lg:mt-0'>
          <input type="text" placeholder='Name' className='w-[320px] lg:w-[420px] h-12 rounded-3xl pl-4 shadow-lg shadow-black/50'/>
          <input type="email" placeholder='Email' className='w-[320px] lg:w-[420px] h-12 rounded-3xl pl-4 shadow-lg shadow-black/50'/>
          <textarea name="" id="" cols="30" rows="8" placeholder='Your Message...' className='w-[320px] lg:w-[420px] rounded-3xl pl-4 pt-4 shadow-lg shadow-black/50'></textarea>
          <button className='w-full bg-[#FFC468] py-3 rounded-3xl font-semibold tracking-wider mt-3'>Contact Us Now</button>
        </form>
      </div>
    </section>
  )
}

export default Contact