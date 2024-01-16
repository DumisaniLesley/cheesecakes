import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const BlogCard = ({ date, slug, title, description, url, image}) => {
  return (
    <div className='bg-[#FFF8E1] w[320px] h-[550px] p-8 rounded-[20px] shadow-lg shadow-black/15'>
      <div className='flex flex-col items-center'>
        <div>
          <Image src={image} width={250} height={250} alt=''/>
        </div>
        <div className='mt-[24px]'>
          <p className='text-[16px] font-semibold text-[#BB6939]'>{date} / <span>{slug}</span></p>
          <h3 className='max-w-[250px] text-[20px] font-bold mt-1'>{title}</h3>
          <p className='max-w-[250px] my-2 text-sm'>{description}</p>
          <Link href={url} className='text-[15px] text-[#734B33] font-semibold'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard