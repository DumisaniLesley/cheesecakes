import Link from 'next/link'
import React from 'react'
import ButtonOutline from './ButtonOutline'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='max-w-[1200px] mx-auto py-4 md:py-6'>
      <div className='flex justify-between items-center'>
        <Link href='/' className=''>
          <Image src='/images/logo.png' width={90} height={50} alt='logo' />
        </Link>
        <ul className='hidden lg:flex gap-x-8 font-semibold items-center tracking-[2px] '>
          <Link href="/" className='border-b-2 border-1 border-[#6A4028] px-3 py-2'>Home</Link>
          <Link href="/about" className='px-3 py-2 '>About Us</Link>
          <Link href="/menu" className='px-3 py-2 '>Menu</Link>
          <Link href="/" className='px-3 py-2 '>Contact</Link>
        </ul>
        <div className='px-4'>
          <ButtonOutline url={'/'} title={'Order Now'}/>
        </div>
      </div>
    </nav>
  )
}

export default Nav