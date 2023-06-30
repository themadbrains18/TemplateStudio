
import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'

import pdpArrowRight from 'public/icons/pdpArrowRight.svg'
import figmaIcon30 from 'public/icons/figmaIcon30.svg'
import xdIcon30 from 'public/icons/xd--30.svg'
import sketchIcon30 from 'public/icons/sketch-30.svg'
import popupCloseBtn from 'public/icons/popupCloseBtn.svg'


// import Swiper core and required modules
import { Navigation, Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Link from 'next/link'


import "swiper/css/pagination";



const PdpSec = ({ product }) => {

    const [thumbnail, setThumbnail] = useState(product?.fullimages[0]?.filename);
    const [pdpborder, setPdpborder] = useState(0);
    const [preview, setPreview] = useState(false);


    //Stop bg scrolling when preview popUp show
    useEffect(() => {
        let previewBtn = document.body.querySelector(".preview_btn");
        let previewCloseBtn = document.body.querySelector(".preview_close_btn");

        previewBtn.addEventListener("click", () => {
            document.body.style.overflowY = "hidden"
            document.querySelector("html").style.overflowY = "hidden";
        })
        previewCloseBtn.addEventListener("click", () => {
            document.body.style.overflowY = "unset"
            document.querySelector("html").style.overflowY = "unset";
        })
    }, [])

    return (
        <>

            <section className='py-[20px] bg-back-white'>
                <div className='big_container'>
                    <div className='flex items-center gap-2 mb-5'>
                        <Link href="/"><Image src='/icons/tmb_icon.svg' width={30} height={30} alt="Image Error" className=''></Image></Link>
                        <div className='flex gap-[10px] items-center'>
                            <p className='medium-heading text-[12px] md:text-[14px]'> <span className='font-open-sans text-[12px] md:text-[14px] text-light-text leading-5 font-normal pr-1'>By</span> <Link href="/">themadbrains</Link></p>
                            <Link href="/" className='medium-heading text-[12px] md:text-[14px]'>{product?.templatecategories[0]?.category?.category}</Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-7 xmd:grid-cols-2'>
                        <div>
                            <div className='p-[10px] xmd:p-5 border-[1px] border-divider-main '>
                                <Image src={`http://localhost:7777/upload/${thumbnail !== undefined ? thumbnail : product?.sliderimages[0]?.filename}`} width={834} height={490} alt="Icon" className='mx-auto preview_img transition-all duration-700' />
                            </div>
                            {/*  <div  className='p-[10px] xmd:p-5 border-[1px] border-divider-main '>
                                <Link href="/" className='pdp_main_img relative'>
                                    <div className="overlay absolute z-10 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-500 ease-in-out">
                                    </div>
                                    <span className='overlay_text font-open-sans font-bold text-white text-[18px] z-20 flex gap-2 absolute  left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 opacity-0 transition duration-500 ease-in-out'>
                                        Preview
                                    </span>
                                    <Image src={`http://localhost:7777/upload/${thumbnail !== undefined ? thumbnail : product?.sliderimages[0]?.filename}`} width={834} height={490} alt="Icon" className='mx-auto preview_img transition-all duration-700' />
                                </Link>
                            </div>*/}
                            <div className='swiper_tabs'>

                                <Swiper
                                    // pagination={{
                                    //     type: "progressbar",
                                    // }}
                                    spaceBetween={10}
                                    slidesPerView={6}
                                    autoHeight={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <div className='flex gap-7 pt-[10px] xmd:p-5 xmd:border xmd:border-divider-main'>
                                        {
                                            product?.sliderimages.map((elem, ind) => {
                                                return (
                                                    <Fragment key={elem.id}>
                                                        <SwiperSlide><Image src={`http://localhost:7777/upload/${elem?.filename}`} width={116} height={76} alt="Icon" className={`cursor-pointer border-divider-main border-[2px] ${pdpborder === ind ? "border-primary" : ""}`} onClick={() => { setThumbnail(elem?.filename), setPdpborder(ind) }} /></SwiperSlide>
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
                                <h2 className="main-heading mb-[10px]  xmd:mb-5">{product?.name}</h2>
                                <p className='main-info '>{product?.description}<span className='cursor-pointer font-semibold text-dark-text'> View more</span></p>
                            </div>
                            <div>
                                {
                                    product?.templatesoftwaretypes?.map((elem, ind) => {
                                        return (
                                            <Fragment key={elem.id}>
                                                <div className='p-[10px] xmd:p-5 border border-divider-main grid pdp_chkbx_item justify-items-end gap-4 mb-[18px]'>
                                                    <div className='flex gap-[10px] xmd:gap-[22px] items-center relative overflow-hidden justify-self-start'>
                                                        <input type='checkbox' id={`'${elem?.softwaretype?.softwareType}'`} className='ckbx_input' ></input>
                                                        <span className='pdp_checkmark'></span>
                                                        <label htmlFor={`'${elem?.softwaretype?.softwareType}'`} className='small-info !font-semibold cursor-pointer'>{elem?.softwaretype?.softwareType}</label>
                                                    </div>
                                                    <div className='h-[100%] w-[2px] bg-divider-main'></div>
                                                    <div className='flex gap-5 w-full justify-end'>
                                                        <button className='small-info !font-semibold w-full'>View Detail </button>
                                                        <Image src={figmaIcon30} width={30} height={30} alt="Icon" className='justify-self-end' />
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    })
                                }

                            </div>

                            <div className='p-[10px] xmd:p-5 bg-primary-800 border border-divider-main flex justify-between items-center mb-[30px]'>
                                <span className='font-open-sans font-semibold text-white text-sm bg-primary py-[2px] px-[11px]'>{product?.price == null || product?.price == undefined || product?.price == "0" ? 'FREE' : 'PAID'}</span>
                                <div className='flex gap-5 items-center'>
                                    <span className='small-info '>Total Price</span>
                                    <span className='font-open-sans font-bold text-[20px] text-light-text'>{`${product?.price == null || product?.price == undefined ? "$0.00" : `$${product?.price.toFixed(2)}`}`}</span>
                                </div>
                            </div>
                            <button className='solid-btn w-full !py-[13px] text-[18px] mb-5'>{product?.price == null || product?.price == undefined ? 'Free —' : ''} Download</button>
                            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className='preview_btn solid-white-btn w-full !py-[13px] text-[18px] border border-primary-100' onClick={() => preview === true ? setPreview(false) : setPreview(true)}>Preview</button>

                        </div>
                    </div>
                </div>
            </section>


            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`fixed bg-gray-600 bg-opacity-80 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100%] max-h-full ${preview == true ? "justify-center items-center flex" : "hidden "}`}>
                <div className="preview_popup relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">

                            <button type="button" className="preview_close_btn text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={(e) => { setPreview(false) }} >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <Swiper
                            // pagination={{
                            //     type: "progressbar",
                            // }}
                            autoHeight={true}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <div className="p-4 space-y-6">
                                {
                                    product?.fullimages?.map((elem, ind) => {
                                        return <SwiperSlide key={elem.id}>
                                            <Image src={`http://localhost:7777/upload/${elem.filename}`} width={900} height={1000} alt='preview image' ></Image>
                                        </SwiperSlide>
                                    })
                                }

                            </div>
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}



export default PdpSec
