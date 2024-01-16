import Link from 'next/link'
import React from 'react'

const Button = ({ url, title}) => {
  return (
    <button className='bg-[#6A4028] border-2 border-[#523728] py-2 px-6 rounded-3xl mr-3 text-[#FFF8E1] font-semibold tracking-wide shadow-lg'>
      <Link href='/'>{title}</Link>
    </button>
  )
}

export default Button