import Image from 'next/image'
import React from 'react'

const MenuCard = ({url, title, subTitle, price}) => {
  return (
    <div className='bg-[#FFF8E1] flex flex-col w-[355px] h-[450] p-4 rounded-[41px] shadow-black/10 shadow-lg'>
      <div className='flex items-center justify-center py-2'>
      <Image src={url} width={200} height={150} alt=''/>
      </div>
      <div className='mt-2 mb-2'>
        <h3 className='text-[22px] lg:text-3xl font-semibold text-[#1D2729]'>{title}</h3>
        <p className='text-[13px] font-normal text-[#555555]'>{subTitle}</p>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <p>$ <span className='text-md lg:text-[21px] text-[#745545] font-semibold'>{price}</span></p>
        <p className='text-md lg:text-[18px] text-[#745545] font-semibold'>Rating</p>
      </div>
    </div>
  )
}

export default MenuCard