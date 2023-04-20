import React from 'react'
import Image from 'next/image'


import heroVector from 'public/icons/heroSecVector.svg'
import figma from 'public/icons/Figma.svg'
import sketch from 'public/icons/sketch.svg'
import xd from 'public/icons/XD.svg'
import heroImg from 'public/images/heroImg.png'
const Hero = () => {
  return (
    <>
      <section className='py-10 md:p-0'>
        <div className='container'>
          <div className='md:grid grid-cols-2 items-center md:items-end  md:gap-8  lg:gap-24'>
            <div className='mb-[30px]'>
              <div className='relative w-[280px] mb-[10px]'>
                <Image src={heroVector} width={190} height={32} alt="Image Error" className=''></Image>
                <p className='absolute top-[5px] left-[10px] font-open-sans font-semibold text-main-text text-[14px]'>Trading of the Day</p>
              </div>
              <h1 className='ex-large-heading mb-5'>Free High-quality UI kits and design resources</h1>
              <p className=' font-open-sans text-main-text text-[14px] pl-1 border-l-2 border-[#CCE0A5] mb-5'>Template Studio is the place to find high-quality design resources for designers, creative agencies and developers</p>
              <div className='flex'>
                <Image src={figma} width={24} height={24} alt="Image Error" className=''></Image>
                <Image src={xd} width={24} height={24} alt="Image Error" className=''></Image>
                <Image src={sketch} width={24} height={24} alt="Image Error" className=''></Image>
              </div>
            </div>

            {/* <div className='relative after:absolute after:max-w-[242px] after:w-full after:h-[295px] after:bg-[#858DA9] after:-z-10 after:top-0'> */}
            <div className='bg-hero-bg-mob md:bg-hero-bg bg-no-repeat bg-cover w-full relative h-[425px]  xl:h-[587px]'>
              <Image src={heroImg} width={470} height={324} alt="Image Error" className='absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]'></Image>
            </div>

            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero