import React from 'react'
import Image from 'next/image'
import ButtonOutline from './ButtonOutline'
import Button from './Button'
import { FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center lg:justify-between h-max items-center px-4 text-center md:text-left mt-10'>
      <div className='flex flex-col items-start'>
        <h2 className='text-3xl lg:text-5xl font-semibold'>Bite The World of Cheesecake Wonders</h2>
        <p className='text-lg mt-6 max-w-[500px]'>We always make our customer happy by providing as many choices as possible.</p>
        <div className='mt-6 mx-auto lg:mx-0'>
          <Button url={'/'} title='Get Started'/>
          <ButtonOutline icon={<FaPlay/>} url='/' title={'Watch Demo'}/>
        </div>
      </div>
      <div className='max-w-[500px] lg:max-w-[650px] '>
        <Image src='/images/hero.png' width={2000} height={500} alt='Hero Image'/>
      </div>
    </div>
  )
}

export default Hero