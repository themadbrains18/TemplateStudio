import React, { useEffect } from 'react'
import Image from 'next/image'

import heroVector from 'public/icons/heroSecVector.svg'
import figma from 'public/icons/Figma.svg'
import sketch from 'public/icons/sketch.svg'
import xd from 'public/icons/XD.svg'
import heroImg from 'public/images/heroPreview.png'



const Hero = () => {

  // =========== Code for Play the video on mouse hover ===========

  // useEffect(()=>{
  // // Targeting video element 
  // let clip = document.querySelector(".vid")

  // /* Applying mouseover event on video clip 
  // and then we call play() function to play 
  // the video when the mouse is over the video */
  // clip.addEventListener("mouseover", function (e) {
  //     clip.play();
  // })

  // /* Applying mouseout event on video clip 
  // and then we call pause() function to stop 
  // the video when the mouse is out the video */
  // clip.addEventListener("mouseout", function (e) {
  //     clip.pause();
  // }) 
  // })

  return (
    <>
      <section className='py-10 md:mt-14 xl:pt-[80px]'>
        <div className='container'>
          <div className='md:grid grid-cols-2 items-center md:items-center  md:gap-8  lg:gap-24 hero_sec after:top-[50%] md:after:top-0 relative' >
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

            <div className='mt-10 relative hero_part before:h-[320px] before:-top-7 before:-z-10 after:-z-20 after:top-[-10%] md:mt-0 md:before:w-[230px] md:before:h-[400px] md:before:top-[-80%] md:before:-z-20 xl:before:top-[-55%] xl:before:h-[587px]'>
              <div class="window md:max-w-[470px] w-full md:my-0 md:mr-0 ml-auto">
                <Image src={heroImg} width={470} height={324} alt="Image Error" className='hero_img ' />
              </div>

              <div className='flex gap-2 items-center mt-5 justify-center'>
                <span className='max-w-[129px] w-full h-[1px] bg-black mr-[-65px] sm:mr-0' ></span>
                <p className='text-[12px] font-open-sans text-[#544E4E]'>NFT (Buy & Sell) <span className=' font-semibold text-[#110833] px-[6px]'>Enefty</span>Template</p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero