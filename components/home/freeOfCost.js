import Image from 'next/image'
import React from 'react'

import wave from 'public/icons/wave.svg'

const FreeOfCost = () => {
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

                    <Image src={wave} width={771} height={123} alt="WAVE" className='hidden md:block absolute bottom-3 right-0 -z-10'/>
                    <h2 className='main-heading mb-5 md:mb-6'>Products For Your Business Free of Cost</h2>
                    <div className='grid grid-cols-2 gap-[15px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
                        {
                            designsData.map((data, index) => {
                                return <div className='small_card flex items-center gap-[10px] p-[10px] border-[1px] bg-white border-divider-main transition-300 md:gap-5 '>
                                    <Image src={`/icons/${data.designIcon}`} width={40} height={40} alt="Image Error" className="small_card_icon p-[5px] transition-300 md:w-[65px] md:h-[65px] md:p-[13px] bg-icon-bg"></Image>
                                    <p className='medium-heading text-xs md:text-base'>{data.designTitle}</p>
                                </div>
                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default FreeOfCost