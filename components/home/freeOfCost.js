import Image from 'next/image'
import React from 'react'


const FreeOfCost = () => {
    let designsData = [
        {
            "designIcon": "cloudIcon.svg",
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
            <section className='sec_spacing'>
                <div className='container'>
                    <h2 className='main-heading mb-5 md:mb-6'>Products For Your Business Free of Cost</h2>
                    <div className='grid grid-cols-2 gap-[15px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
                        {
                            designsData.map((data, index) => {
                                return <div className='flex items-center gap-[10px] p-[10px] border-[1px] border-divider-main md:gap-5'>
                                    <Image src={`/icons/${data.designIcon}`} width={40} height={40} alt="Image Error" className="md:w-[65px] md:h-[65px]"></Image>
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