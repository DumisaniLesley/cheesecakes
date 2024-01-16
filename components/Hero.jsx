'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ButtonOutline from './ButtonOutline';
import Button from './Button';
import { FaPlay } from 'react-icons/fa';
import Modal from 'react-modal';

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    console.log("modal Is Open");
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='flex flex-col lg:flex-row justify-center lg:justify-between h-max items-center px-4 text-center md:text-left mt-10'>
      <div className='flex flex-col items-start'>
        <h2 className='text-3xl lg:text-5xl font-semibold'>Bite The World of Cheesecake Wonders</h2>
        <p className='text-lg mt-6 max-w-[500px]'>We always make our customer happy by providing as many choices as possible.</p>
        <div className='mt-6 mx-auto lg:mx-0'>
          <Button url={'/'} title='Get Started'/>
          <ButtonOutline icon={<FaPlay/>} onClick={openModal} title={'Watch Demo'}/>
        </div>
      </div>
      <div className='max-w-[500px] lg:max-w-[650px] '>
        <Image src='/images/hero.png' width={2000} height={500} alt='Hero Image'/>
      </div>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={
          {
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
          }
        }
      >
        <video src="/videos/hero.mp4" autoPlay className='h-max w-full' ></video>
      </Modal>
    </div>
  );
};

export default Hero;