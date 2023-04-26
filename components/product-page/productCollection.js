import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import filterIcon from 'public/icons/filterIcon.svg'
import filterCrossBtn from 'public/icons/filter-cross.svg'
import popupCloseBtn from 'public/icons/popupCloseBtn.svg'
import notFoundProd from 'public/icons/notFoundProd.svg'
import rightArrow from 'public/icons/rightArrow.svg'

import FilterCheckBox from '../snippets/filterCheckBox'
import TemplateCard from '../snippets/templateCard'
const ProductCollection = () => {

    const [filterPopUp, setFilterPopUp] = useState(false)
    const [tab, setTab] = useState(1);

    let updateTab = (id) => {
        setTab(id)
    }

    const filterData = [
        {
            'filterTitle': 'Price Range',
            'filterOption': ['Freebies', '0$ - 05$', '05 - 10$', '10$ - 20 $']
        },
        {
            'filterTitle': 'Template Studio Special',
            'filterOption': ['Feature Products', 'Popular Template', 'Browse Trending Categories']
        },
        {
            'filterTitle': 'Industries',
            'filterOption': ['Real Estate', 'Insurance', 'Education', 'Entertainment', 'Real Estate', 'Retail', 'Sports', 'Technology', 'Crypto', 'NFT']
        },
        {
            'filterTitle': 'Tags',
            'filterOption': []
        },
        {
            'filterTitle': 'Software Type',
            'filterOption': ['Wordpress', 'HTML / CSS', 'React', 'Bootstrap', 'Figma', 'Sketch', 'Adobe XD']
        },
    ]

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
            <section className=''>
                <div className='big_container'>
                    <div className='bg-white flex py-5 gap-[30px] flex-col md:flex-row md:pt-[45px] md:pb-[42px] '>
                        <h3 className='font-open-sans font-semibold text-xl text-main-text max-w-[357px] w-full border-r-[2px]  border-divider-main'>Catagory Tags</h3>
                        <div className='flex gap-10 overflow-x-auto'>
                            <button className={`large-info whitespace-nowrap  ${tab === 1 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(1)}>All</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 2 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(2)}>HTML</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 3 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(3)}>React</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 4 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(4)}>Wordpress</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 5 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(5)}>Shopify</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 6 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(6)}>Bootstrap</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 7 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(7)}>CSS</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 8 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(8)}>Sketch</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 9 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(9)}>Adobe XD</button>
                            <button className={`large-info whitespace-nowrap  ${tab === 10 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTab(10)}>Figma</button>

                        </div>
                    </div>
                </div>
                <div className='bg-back-white'>
                    <div className='big_container'>
                        <div className='flex gap-[30px] pt-10 pb-10 relative mb:pb-20'>
                            <div className={` max-w-[350px] w-full px-5 py-[30px] bg-white border-[1px] border-divider-main  xl:block ${filterPopUp ? "block absolute z-10 top-20 left-0" : "hidden"}`}>
                                <div className='flex justify-between pb-[22px]  border-b-[1px] border-divider-main'>
                                    <div className='flex gap-[10px] '>
                                        <Image src={filterIcon} width={20} height={20} alt="Icon" className='' />
                                        <span className='large-info'>Filters</span>
                                    </div>
                                    <Image src={popupCloseBtn} width={16} height={16} alt=" Close Button" className='lg:hidden' onClick={() => { setFilterPopUp(false) }} />
                                </div>
                                {filterData.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <FilterCheckBox data={item} />
                                        </Fragment>
                                    )
                                })}
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-between pb-5 border-b border-divider-light flex-col-reverse items-end gap-[18px] xl:flex-row'>
                                    <ul className='flex gap-[10px] w-full overflow-x-auto'>

                                        <li className='flex gap-[10px] items-center small-info px-[14px] py-[6px] bg-primary-700 rounded-sm h-8 whitespace-nowrap '>Freebies<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='cursor-pointer' /></li>

                                        <li className='flex gap-[10px] items-center small-info px-[14px] py-[6px] rounded-sm h-8 whitespace-nowrap'>Clear all<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='cursor-pointer' /></li>
                                    </ul>
                                    <div className='relative flex justify-between w-full items-center xl:w-auto whitespace-nowrap'>
                                        <div className='flex gap-[10px] xl:hidden' onClick={() => {
                                            setFilterPopUp(true)
                                        }}>
                                            <Image src={filterIcon} width={20} height={20} alt="Icon" className='' />
                                            <span className='large-info'>Filters</span>
                                        </div>
                                        <div className='sortby_btn'>
                                            <button className='icon_btn medium-info flex gap-[10px] items-center px-5 py-2 border-[1px] border-divider-main    '>
                                                <span>  Sort by</span>
                                                <svg className='transition-300' xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path d="M5.9467 7.33658C6.05638 7.33721 6.16509 7.31619 6.26663 7.27472C6.36816 7.23325 6.4605 7.17215 6.53837 7.09491L11.5384 2.09491C11.6953 1.93799 11.7834 1.72517 11.7834 1.50325C11.7834 1.28133 11.6953 1.0685 11.5384 0.91158C11.3815 0.754661 11.1686 0.666504 10.9467 0.666504C10.7248 0.666504 10.512 0.754661 10.355 0.91158L5.9467 5.32825L1.53837 0.919914C1.37895 0.783392 1.17389 0.712053 0.96416 0.720154C0.75443 0.728255 0.55548 0.815199 0.407068 0.963611C0.258657 1.11202 0.171714 1.31097 0.163612 1.5207C0.155512 1.73043 0.226849 1.9355 0.363371 2.09491L5.36337 7.09491C5.51859 7.24887 5.72809 7.33566 5.9467 7.33658Z" fill="#5D5775" />
                                                </svg>
                                            </button>
                                            <ul className='sortby_dropdown py-[10px] absolute top-[42px] right-0 z-10 w-[208px] bg-white opacity-0 invisible transition-300'>
                                                <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300 cursor-pointer'>Newest releases</li>
                                                <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300 cursor-pointer'>Most popular</li>
                                                <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300 cursor-pointer'>Best sellers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Not Found Start */}
                                <div className='p-10 bg-white hidden'>
                                    <p className='medium-heading text-[18px] md:text-[20px]'>Sorry, we couldn’t find any results for this search. Maybe give one of these a try?</p>
                                    <Image src={notFoundProd} width={197} height={140} alt="Icon" className='py-[80px] m-auto' />
                                    <div className='border-t-[1px] border-divider-main py-[30px] flex flex-col gap-5 md:justify-between'>
                                        <p className='small-info md:!text-base'>Try <Link href="" className="text-primary border-b-[1px] border-primary"> clearing some filters </Link> and try again.</p>
                                        <button className='solid-btn text-lg font-semibold'>Find more products</button>
                                    </div>
                                </div>
                                {/* Product Not Found End */}

                                <div className='grid grid-cols-1 gap-[20px] py-[30px] place-items-center md:grid-cols-2 md:gap-[25px] xl:grid-cols-3'>
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
                                <div className='text-center mt-0 md:mt-[30px]'>
                                    <button className='solid-white-btn shadow-btnShadow text-center'>Load More Products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCollection