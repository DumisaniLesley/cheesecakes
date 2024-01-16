import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const socials = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/dscode.id',
    img: <FaFacebookF />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/dscode.id',
    img: <FaInstagram />,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/dscode_id',
    img: <FaTwitter />,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCXy7Zu1qK9zNj8l6l6XK2Vw',
    img: <FaYoutube />,
  },
]

const Footer = () => {
  return (
    <footer className='py-8'>
      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
        <div>
          <p>Designed by: 
            <Link href='https://www.figma.com/file/vrqgcdX9XA7jUuzPo7KPax/Cheesecake-For-Twitter?node-id=1610%3A163&mode=dev' target='_blank' className='text-md uppercase font-semibold tracking-wide'> Amenai Sabuwala</Link></p>
        </div>
        <div className='flex mt-2 lg:mt-0'>
          {socials.map((social, index) => (
              <Link href={social.link} key={index} target='_blank' rel='noreferrer' className='mr-4 text-3xl'>
                {social.img}
                {/* <span>{social.name}</span> */}
              </Link>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer