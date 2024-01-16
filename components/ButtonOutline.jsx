import Link from 'next/link'
import React from 'react'

// Adjust Font Size

const ButtonOutline = ({ url, title}) => {
  return (
    <button className='border-2 border-[#523728] py-1 px-4 lg:py-2 lg:px-6 rounded-3xl hover:bg-[#523728] hover:text-[#FFF8E1] transition-all duration-200 ease-out font-semibold tracking-wide'>
      <Link href={url}>{title}</Link>
    </button>
  )
}

export default ButtonOutline