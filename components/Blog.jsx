import React from 'react'
import BlogCard from './BlogCard'

const blogData = [
  {
      id: 1,
      date: '23 Nov, 2023',
      slug: 'cheesecake',
      title: 'A Peek Behind the Cheesecake Curtain',
      description: 'Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...',
      image: '/images/blog1.png',
      url: '/'
  },
  {
      id: 2,
      date: '18 July, 2023',
      slug: 'cheesecake',
      title: 'Low-Sugar & Gluten-Free Cheesecakes',
      description: 'Welcome to our guilt-free indulgence zone, where we are redefining the art of cheesecake art of cheesecake art of cheesecake with our delectable low-sugar...',
      image: '/images/blog2.png',
      url: '/'
  },
  {
      id: 3,
      date: '1 January, 2024',
      slug: 'cheesecake',
      title: 'Sweet Words - Customer Reviews of Cheesecakes',
      description: 'Indulge in the rich tapestry of heartfelt stories within "Sweet Words." This curated collection of customer reviews offers a glimpse into the joy...',
      image: '/images/blog3.png',
      url: '/'
  },
]

const Blog = () => {
  return (
    <section className='py-10'>
      <div className='px-4'>
        <div className='text-center text-[#734B33]'>
          <h2 className='text-4xl lg:text-[64px]'>Our Blog</h2>
          <p className='text-xl mt-2 lg:mt-4'>Our Recent Posts</p>
        </div>
        <div className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center items-center lg:justify-between mt-5 lg:mt-10 gap-y-5 lg:gap-y-0 md:gap-x-8'>
          {blogData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog