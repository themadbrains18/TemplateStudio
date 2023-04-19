import React from 'react'
import Image from 'next/image'

import pdpMainImage from 'public/images/pdpMainImage.png'
import pdpImg3 from 'public/images/pdpImg3.png'
import pdpArrowRight from 'public/icons/pdpArrowRight.svg'
import figmaIcon30 from 'public/icons/figmaIcon30.svg'

// import Swiper core and required modules
import { Navigation,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const PdpSec = () => {
    return (
        <>
            <section className='py-[20px] bg-back-white'>
                <div className='big_container'>
                    <div className='flex items-center gap-2 mb-5'>
                        <Image src='/icons/tmb_icon.svg' width={30} height={30} alt="Image Error" className=''></Image>
                        <div className='flex gap-[10px] items-center'>
                            <p className='medium-heading text-[12px] md:text-[14px]'> <span className='font-open-sans text-[12px] md:text-[14px] text-light-text leading-5 font-normal pr-1'>By</span>themadbrains</p>
                            <span className='medium-heading text-[12px] md:text-[14px]'>UI templates</span>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-7 xmd:grid-cols-2'>
                        <div>
                            <div className='p-[10px] xmd:p-5 border-[1px] border-divider-main'>
                                <Image src={pdpMainImage} width={834} height={490} alt="Icon" className='mx-auto' />
                            </div>
                            <div className='px-[50px] overflow-hidden'>
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView={6}
                                    navigation
                                
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >
                                <div className='flex gap-7 pt-[10px] xmd:p-5 xmd:border xmd:border-divider-main'>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>
                                    <SwiperSlide><Image src={pdpImg3} width={116} height={76} alt="Icon" className='border-divider-main border-[3px]' /></SwiperSlide>   
                                </div>

                                </Swiper>
                            </div>     
                            {/* <div className=' flex gap-7 pt-[10px] xmd:p-5 xmd:border xmd:border-divider-main'>
                                <div className='grid grid-cols-6 gap-3 overflow-x-auto'>
                                   
                                </div>
                                <Image src={pdpArrowRight} width={15} height={11} alt="Icon" className='hidden xmd:block' />
                            </div> */}

                        </div>
                        <div className=''>
                            <div className='mb-5 xmd:mb-10 '>
                                <h2 className="main-heading mb-[10px]  xmd:mb-5">Room - UI Kit for Room Sharing UI Template </h2>
                                <p className='main-info '>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<span className='font-semibold text-dark-text'> View more</span></p>
                            </div>
                            <div>
                                <div className='p-[10px] xmd:p-5 border border-divider-main flex justify-between gap-4 mb-[18px]'>
                                    <div className='flex gap-[10px] xmd:gap-[22px] items-center relative'>
                                        <input type='checkbox' id='figmaDesign' ></input>
                                        <label htmlFor='figmaDesign' className='small-info !font-semibold'>Figma Design File</label>
                                    </div>
                                    <div className='border-r-2 border-divider-main'></div>
                                    <button className='small-info !font-semibold'>View Detail </button>
                                    <Image src={figmaIcon30} width={30} height={30} alt="Icon" className='' />
                                </div>

                                <div className='p-[10px] xmd:p-5 border border-divider-main flex justify-between gap-4 mb-[18px]'>
                                    <div className='flex gap-[10px] xmd:gap-[22px] items-center'>
                                        <input type='checkbox' id='xdDesign'></input>
                                        <label htmlFor='xdDesign' className='small-info !font-semibold'>XD Design File</label>
                                    </div>
                                    <div className='border-r-2 border-divider-main'></div>
                                    <button className='small-info !font-semibold'>View Detail </button>
                                    <Image src={figmaIcon30} width={30} height={30} alt="Icon" className='' />
                                </div>
                                <div className='p-[10px] xmd:p-5 border border-divider-main flex justify-between gap-4 mb-[18px]'>
                                    <div className='flex gap-[10px] xmd:gap-[22px] items-center'>
                                        <input type='checkbox' id='sketchDesign'></input>
                                        <label htmlFor='sketchDesign' className='small-info !font-semibold'>Sketch Design File</label>
                                    </div>
                                    <div className='border-r-2 border-divider-main'></div>
                                    <button className='small-info !font-semibold'>View Detail </button>
                                    <Image src={figmaIcon30} width={30} height={30} alt="Icon" className='' />
                                </div>
                            </div>

                            <div className='p-[10px] xmd:p-5 bg-primary-800 border border-divider-main flex justify-between items-center mb-[30px]'>
                                <span className='font-open-sans font-semibold text-white text-sm bg-primary py-[2px] px-[11px]'>FREE</span>
                                <div className='flex gap-5 items-center'>
                                    <span className='small-info '>Total Price</span>
                                    <span className='font-open-sans font-bold text-[20px] text-light-text'>$0.00</span>
                                </div>
                            </div>
                            <button className='solid-btn w-full !py-[13px] text-[18px] mb-5'>Free — Download</button>
                            <button className='solid-white-btn w-full !py-[13px] text-[18px] border border-primary-100'>Preview</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default PdpSec