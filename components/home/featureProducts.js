import React from 'react'
import TemplateCard from '../snippets/templateCard'


const FeatureProducts = () => {
    let templateData = [
        {
            "templateImg": "productImg.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "productImg2.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "productImg3.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "productImg4.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "productImg5.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "productImg6.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
    ]
    return (
        <>
            <section className='sec_spacing bg-back-white'>
                <div className='container'>
                    <h2 className='main-heading mb-5 md:mb-6'>Feature Products</h2>
                    <div className='grid grid-cols-1 gap-[20px] mb-[30px] place-items-center  sm:grid-cols-2  md:mb-10 md:gap-[30px]  lg:grid-cols-3'>
                        {
                            templateData.map((value, index) => {
                                return <TemplateCard items={value} />
                            })
                        }
                    </div>
                    <div className='text-center'>
                        <a href='/' className='solid-white-btn shadow-btnShadow text-center'>View All Products</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureProducts

