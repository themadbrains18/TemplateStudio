
import React, { Fragment, useState } from 'react'
import Image from 'next/image'

import pdpArrowRight from 'public/icons/pdpArrowRight.svg'
import figmaIcon30 from 'public/icons/figmaIcon30.svg'
import xdIcon30 from 'public/icons/xd--30.svg'
import sketchIcon30 from 'public/icons/sketch-30.svg'


// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Link from 'next/link'


let thumbnailImgs = ["pdpMainImage.png", "pdp2.png", "pdp3.png", "pdp4.png", "pdp5.png", "pdpMainImage.png", "pdp2.png", "pdp3.png", "pdp4.png", "pdp5.png", "pdp5.png"];
const PdpSec = () => {
    const [thumbnail, setThumbnail] = useState("pdpMainImage.png");
    const [pdpborder, setPdpborder] = useState(0);

    return (
        <>
            <section className='py-[20px] bg-back-white'>
                <div className='big_container'>
                    <div className='flex items-center gap-2 mb-5'>
                        <Link href="/"><Image src='/icons/tmb_icon.svg' width={30} height={30} alt="Image Error" className=''></Image></Link>
                        <div className='flex gap-[10px] items-center'>
                            <p className='medium-heading text-[12px] md:text-[14px]'> <span className='font-open-sans text-[12px] md:text-[14px] text-light-text leading-5 font-normal pr-1'>By</span> <Link href="/">themadbrains</Link></p>
                            <Link href="/" className='medium-heading text-[12px] md:text-[14px]'>UI templates</Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-7 xmd:grid-cols-2'>
                        <div>
                            <div className='p-[10px] xmd:p-5 border-[1px] border-divider-main '>
                                <Link href="/" className='pdp_main_img relative'>
                                    <div className="overlay absolute z-10 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-500 ease-in-out">
                                    </div>
                                    <span className='overlay_text font-open-sans font-bold text-white text-[18px] z-20 flex gap-2 absolute  left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 opacity-0 transition duration-500 ease-in-out'>
                                        Preview
                                    </span>
                                    <Image src={`/images/${thumbnail}`} width={834} height={490} alt="Icon" className='mx-auto preview_img transition-all duration-700' />
                                </Link>
                            </div>
                            <div className=''>
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={6}
                                    freeMode="true"
                                    loop={true}
                                    autoplay={{
                                        "delay": 1000,
                                    }}
                                    speed="1500"

                                    navigation={true}

                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >
                                    <div className='flex gap-7 pt-[10px] xmd:p-5 xmd:border xmd:border-divider-main'>
                                        {
                                            thumbnailImgs.map((elem, ind) => {
                                                return (
                                                    <Fragment key={ind}>
                                                        <SwiperSlide><Image src={`/images/${elem}`} width={116} height={76} alt="Icon" className={`cursor-pointer border-divider-main border-[2px] ${pdpborder === ind ? "border-primary" : ""}`} onClick={() => { setThumbnail(elem), setPdpborder(ind) }} /></SwiperSlide>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </Swiper>
                            </div>

                        </div>
                        <div className=''>
                            <div className='mb-5 xmd:mb-10 '>
                                <h2 className="main-heading mb-[10px]  xmd:mb-5">Room - UI Kit for Room Sharing UI Template </h2>
                                <p className='main-info '>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<span className='cursor-pointer font-semibold text-dark-text'> View more</span></p>
                            </div>
                            <div>
                                <div className='p-[10px] xmd:p-5 border border-divider-main grid pdp_chkbx_item justify-items-end gap-4 mb-[18px]'>
                                    <div className='flex gap-[10px] xmd:gap-[22px] items-center relative overflow-hidden justify-self-start'>
                                        <input type='checkbox' id='figmaDesign' className='ckbx_input' ></input>
                                        <span className='pdp_checkmark'></span>
                                        <label htmlFor='figmaDesign' className='small-info !font-semibold cursor-pointer'>Figma Design File</label>
                                    </div>
                                    <div className='h-[100%] w-[2px] bg-divider-main'></div>
                                    <button className='small-info !font-semibold'>View Detail </button>
                                    <Image src={figmaIcon30} width={30} height={30} alt="Icon" className='justify-self-end' />
                                </div>
                                <div className='p-[10px] xmd:p-5 border border-divider-main grid pdp_chkbx_item justify-items-end gap-4 mb-[18px]'>
                                    <div className='flex gap-[10px] xmd:gap-[22px] items-center relative overflow-hidden justify-self-start'>
                                        <input type='checkbox' id='figmaDesign' className='ckbx_input' ></input>
                                        <span className='pdp_checkmark'></span>
                                        <label htmlFor='figmaDesign' className='small-info !font-semibold cursor-pointer'>XD Design File</label>
                                    </div>
                                    <div className='h-[100%] w-[2px] bg-divider-main'></div>
                                    <button className='small-info !font-semibold'>View Detail </button>
                                    <Image src={xdIcon30} width={30} height={30} alt="Icon" className='justify-self-end' />
                                </div>
                                <div className='p-[10px] xmd:p-5 border border-divider-main grid pdp_chkbx_item  justify-items-end gap-4 mb-[18px]'>
                                    <div className='flex gap-[10px] xmd:gap-[22px] items-center relative overflow-hidden justify-self-start'>
                                        <input type='checkbox' id='figmaDesign' className='ckbx_input' ></input>
                                        <span className='pdp_checkmark'></span>
                                        <label htmlFor='figmaDesign' className='small-info !font-semibold cursor-pointer'>Sketch Design File</label>
                                    </div>
                                    <div className='h-[100%] w-[2px] bg-divider-main'></div>
                                    <button className='small-info !font-semibold'>View Detail </button>
                                    <Image src={sketchIcon30} width={30} height={30} alt="Icon" className='justify-self-end' />
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
