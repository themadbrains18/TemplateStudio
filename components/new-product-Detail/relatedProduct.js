import React, { Fragment } from 'react'
import TemplateCard from '../snippets/templateCard'

const RelatedProduct = () => {
    let templateData = [
        {
            "templateImg": "relatedCardImg1.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "relatedCardImg1.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "relatedCardImg1.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
        {
            "templateImg": "relatedCardImg1.png",
            "caption": "Room Sharing - UI Kit Template...",
            "designingToolIcon": "Figma.svg",
            "companyLogo": "tmb_icon.svg",
            "companyName": "themadbrains",
            "templateType": "UI templates",
        },
    ]

    return (
        <>
            <section className='sec_spacing-80 bg-back-white'>
                <div className='big_container'>
                    <h2 className='main-heading mb-5 md:mb-6'>Related Products</h2>
                    <div className='grid grid-cols-1 gap-[20px]  place-items-center  sm:grid-cols-2 md:gap-[30px]  lg:grid-cols-4'>
                        {
                            templateData.map((value, index) => {
                                return (
                                    <Fragment key={index}>
                                        <TemplateCard items={value} />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedProduct