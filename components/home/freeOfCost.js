import Image from 'next/image'
import React, { Fragment } from 'react'

import wave from 'public/icons/wave.svg'
import Link from 'next/link'

const FreeOfCost = (props) => {
    console.log(props);
    let designsData = [
        {
            "designIcon": "designIcon1.svg",
            designTitle: "Website Design",
        },
        {
            "designIcon": "designIcon2.svg",
            designTitle: "WordPress Themes",
        },
        {
            "designIcon": "designIcon3.svg",
            designTitle: "Shopify Themes",
        },
        {
            "designIcon": "designIcon4.svg",
            designTitle: "Mobile Apps",
        },
        {
            "designIcon": "designIcon5.svg",
            designTitle: "Landing Page",
        },
        {
            "designIcon": "designIcon6.svg",
            designTitle: "E-Commerce Theme",
        },
        {
            "designIcon": "designIcon7.svg",
            designTitle: "Dashboard",
        },
        {
            "designIcon": "designIcon8.svg",
            designTitle: "Wireframe Design",
        },
    ]
    return (
        <>
            <section className='sec_spacing relative'>
                <div className='container'>

                    <Image src={wave} width={771} height={123} alt="WAVE" className='hidden md:block absolute bottom-3 right-0 -z-10' />
                    <h2 className='main-heading mb-5 md:mb-6'>Products For Your Business Free of Cost</h2>
                    <div className='grid grid-cols-2 gap-[15px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
                        {
                            props?.categoryList.map((data, index) => {
                                return (
                                    <>
                                        {
                                            data?.subcategories.map((item, index) => {
                                                return (
                                                    <Fragment key={item.id}>
                                                        <Link href='/productPage' className='small_card flex items-center gap-[10px] p-[10px] border-[1px]  bg-white border-divider-main transition-300 md:gap-5 '>
                                                            <svg className="small_card_icon p-[5px] transition-300 md:w-[65px] md:h-[65px] md:p-[13px] bg-icon-bg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.6458 1H3.77074C2.24288 1 1 2.24288 1 3.77074V10.8958C1 12.4239 2.24288 13.6668 3.77074 13.6668H15.6458C17.1739 13.6668 18.4168 12.4239 18.4168 10.8958V3.77074C18.4168 2.24288 17.1739 1 15.6458 1Z" fill="#5D5775" />
                                                                <path d="M15.6458 16.834H3.77074C2.24288 16.834 1 18.0769 1 19.605V36.23C1 37.7579 2.24288 39.0008 3.77074 39.0008H15.6458C17.1739 39.0008 18.4168 37.7579 18.4168 36.23V19.605C18.4168 18.0769 17.1739 16.834 15.6458 16.834Z" fill="#CE99F7" />
                                                                <path d="M36.23 26.334H24.355C22.8269 26.334 21.584 27.5769 21.584 29.105V36.23C21.584 37.7579 22.8269 39.0008 24.355 39.0008H36.23C37.7579 39.0008 39.0008 37.7579 39.0008 36.23V29.105C39.0008 27.5769 37.7579 26.334 36.23 26.334Z" fill="#5D5775" />
                                                                <path d="M36.23 1H24.355C22.8269 1 21.584 2.24288 21.584 3.77074V20.3958C21.584 21.9239 22.8269 23.1668 24.355 23.1668H36.23C37.7579 23.1668 39.0008 21.9239 39.0008 20.3958V3.77074C39.0008 2.24288 37.7579 1 36.23 1V1Z" fill="#CE99F7" />
                                                            </svg>
                                                            <p className='medium-heading text-xs md:text-base'>{item.subCategory}</p>
                                                        </Link>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </>
                                )

                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default FreeOfCost