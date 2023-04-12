import React from 'react'
import Image from 'next/image'


import filterIcon from 'public/icons/filterIcon.svg'
import filterCrossBtn from 'public/icons/filter-cross.svg'
import FilterCheckBox from '../snippets/filterCheckBox'
import TemplateCard from '../snippets/templateCard'
const ProductCollection = () => {
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
                    <div className='bg-white flex gap-[30px] pt-[45px] pb-[42px] flex-col md:flex-row'>
                        <h3 className='font-open-sans font-semibold text-xl text-main-text max-w-[357px] w-full border-r-[2px]  border-divider-main'>Catagory Tags</h3>
                        <div className='flex gap-10 overflow-x-auto'>
                            <button className='large-info whitespace-nowrap'>All</button>
                            <button className='large-info whitespace-nowrap'>HTML</button>
                            <button className='large-info whitespace-nowrap'>React</button>
                            <button className='large-info whitespace-nowrap'>Wordpress</button>
                            <button className='large-info whitespace-nowrap'>Shopify</button>
                            <button className='large-info whitespace-nowrap'>Bootstrap</button>
                            <button className='large-info whitespace-nowrap'>CSS</button>
                            <button className='large-info whitespace-nowrap'>Sketch</button>
                            <button className='large-info whitespace-nowrap'>Adobe XD</button>
                            <button className='large-info whitespace-nowrap'>Figma</button>
                        </div>
                    </div>
                </div>
                <div className='bg-back-white'>
                    <div className='big_container'>
                        <div className='flex gap-[30px] pt-10 pb-20'>
                            <div className=' max-w-[350px] w-full px-5 py-[30px] bg-white border-[1px] border-divider-main hidden xl:block'>
                                <div className='flex gap-[10px] pb-[22px]  border-b-[1px] border-divider-main'>
                                    <Image src={filterIcon} width={20} height={20} alt="Icon" className='' />
                                    <span className='large-info'>Filters</span>
                                </div>
                                {filterData.map((item, index) => {
                                    return <FilterCheckBox data={item} key={index} />
                                })}
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-between pb-5 border-b border-divider-light flex-col-reverse items-end gap-[18px] xl:flex-row'>
                                    <ul className='flex gap-[10px] w-full overflow-x-auto'>
                                        <li className='flex gap-[10px] items-center small-info px-[14px] py-[6px] bg-primary-700 rounded-sm h-8 whitespace-nowrap'>Freebies<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                        <li className='flex gap-[10px] items-center small-info px-[14px] py-[6px] bg-primary-700 rounded-sm h-8 whitespace-nowrap'>Feature Products<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                        <li className='flex gap-[10px] items-center small-info px-[14px] py-[6px] bg-primary-700 rounded-sm h-8 whitespace-nowrap'>Real Estate<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                        <li className='flex gap-[10px] items-center small-info px-[14px] py-[6px] bg-primary-700 rounded-sm h-8 whitespace-nowrap'>Wordpress<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                        <li className='flex gap-[10px] items-center small-info px-[14px] py-[6px] rounded-sm h-8 whitespace-nowrap'>Clear all<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                    </ul>
                                    <div className='sortby_btn relative flex justify-between w-full items-center xl:w-auto whitespace-nowrap'>
                                        <div className='flex gap-[10px] xl:hidden'>
                                            <Image src={filterIcon} width={20} height={20} alt="Icon" className='' />
                                            <span className='large-info'>Filters</span>
                                        </div>
                                        <div>
                                            <button className='icon_btn medium-info flex gap-[10px] items-center px-5 py-2 border-[1px] border-divider-main    '>
                                                <span>  Sort by</span>
                                                <svg className='transition-all duration-300' xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path d="M5.9467 7.33658C6.05638 7.33721 6.16509 7.31619 6.26663 7.27472C6.36816 7.23325 6.4605 7.17215 6.53837 7.09491L11.5384 2.09491C11.6953 1.93799 11.7834 1.72517 11.7834 1.50325C11.7834 1.28133 11.6953 1.0685 11.5384 0.91158C11.3815 0.754661 11.1686 0.666504 10.9467 0.666504C10.7248 0.666504 10.512 0.754661 10.355 0.91158L5.9467 5.32825L1.53837 0.919914C1.37895 0.783392 1.17389 0.712053 0.96416 0.720154C0.75443 0.728255 0.55548 0.815199 0.407068 0.963611C0.258657 1.11202 0.171714 1.31097 0.163612 1.5207C0.155512 1.73043 0.226849 1.9355 0.363371 2.09491L5.36337 7.09491C5.51859 7.24887 5.72809 7.33566 5.9467 7.33658Z" fill="#5D5775" />
                                                </svg>
                                            </button>
                                            <ul className='sortby_dropdown py-[10px] absolute top-[42px] right-0 w-[208px] bg-white opacity-0 invisible transition-all duration-300'>
                                                <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-all duration-300'>Newest releases</li>
                                                <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-all duration-300'>Most popular</li>
                                                <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-all duration-300'>Best sellers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 gap-[25px] py-[30px]'>
                                {
                                    templateData.map((value, index) => {
                                        return <TemplateCard items={value} />
                                    })
                                }
                            </div>
                            <div className='text-center mt-[30px]'>
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