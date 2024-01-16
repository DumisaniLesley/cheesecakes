import React from 'react'
import MenuCard from './MenuCard'

const menuData = [
  {
    id: 1,
    url: '/images/blueberry.png',
    title: 'Blueberry Cheesecake',
    subTitle: 'Blueberry love, cheesecake delight!',
    price: '9.00'
  },
  {
    id: 2,
    url: '/images/biscoff.png',
    title: 'Biscoff Cheesecake',
    subTitle: 'Biscoff adores cheesecake magic',
    price: '11.00'
  },
  {
    id: 3,
    url: '/images/chocolate.png',
    title: 'Chocolate Cheesecake',
    subTitle: 'Cherish Chocolate, relish cheesecake magic!',
    price: '10.00'
  },
  
]

const Menu = () => {
  return (
    <section className='pb-20 mt-20'>
      <div className='px-10 lg:px-0'>
        <div className='text-center mb-6'>
          <h2 className='text-[#734B33] text-4xl lg:text-[64px]'>Our Menu</h2>
        </div>
        <div>
          <div className='flex flex-wrap justify-between gap-y-4 '>
            {menuData.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu