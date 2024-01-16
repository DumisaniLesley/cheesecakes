import Image from 'next/image'
import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className='mt-2 py-4'>
      <div className='text-center lg:text-start mb-2 lg:mb-1'>
          <h2 className='text-[#734B33] text-4xl lg:text-[64px]'>About Us</h2>
          <p className='max-w-[350px] md:max-w-[550px] lg:max-w-full mx-auto mt-2 lg:mt-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sed voluptate qui libero iusto explicabo.</p>
        </div>
      <div className='flex flex-col justify-center lg:flex-row lg:justify-between items-center h-max px-6'>
        <div className='w-[250px] lg:w-[550px] mx-auto'>
          <Image src='/images/about.png' width={1000} height={400} alt=''/>
        </div>
        <div className='h-full flex flex-col items-center lg:items-start justify-center gap-y-4 mt-2 lg:mt-40 text-center lg:text-start'>
          <h2 className='text-3xl lg:text-5xl font-semibold'>We Love Cheesecake</h2>
          <p className='text-xl md:text-2xl -mt-4 md:mt-0'>Discover Our Cheesecake Story</p>
          <p className='max-w-[550px]'>At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity. </p>
          <p className='max-w-[300px] md:max-w-[550px]'>We believe in delivering not just desserts but moments of sheer indulgence.</p>
          <Button url='/' title='Read More' />
        </div>
      </div>
    </div>
  )
}

export default About