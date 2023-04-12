import React from 'react'
import Image from 'next/image'


import filterIcon from 'public/icons/filterIcon.svg'
import filterCrossBtn from 'public/icons/filter-cross.svg'
import FilterCheckBox from '../snippets/filterCheckBox'
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
    return (
        <>
            <section className='bg-back-white'>
                <div className='big_container'>
                    <div className='bg-white flex gap-[30px] pt-[45px] pb-[42px]'>
                        <h3 className='font-open-sans font-semibold text-xl text-main-text max-w-[357px] w-full border-r-[2px]  border-divider-main'>Catagory Tags</h3>
                        <div className='flex gap-10'>
                            <button className='large-info'>All</button>
                            <button className='large-info'>HTML</button>
                            <button className='large-info'>React</button>
                            <button className='large-info'>Wordpress</button>
                            <button className='large-info'>Shopify</button>
                            <button className='large-info'>Bootstrap</button>
                            <button className='large-info'>CSS</button>
                            <button className='large-info'>Sketch</button>
                            <button className='large-info'>Adobe XD</button>
                            <button className='large-info'>Figma</button>
                        </div>
                    </div>

                    <div className='flex gap-[30px] pt-10 pb-20'>
                        <div className=' max-w-[357px] w-full px-5 py-[30px] bg-white border-[1px] border-divider-main'>
                            <div className='flex gap-[10px] pb-[22px]  border-b-[1px] border-divider-main'>
                                <Image src={filterIcon} width={20} height={20} alt="Icon" className='' />
                                <span className='large-info'>Filters</span>
                            </div>
                            {filterData.map((item, index) => {
                                return <FilterCheckBox data={item} key={index} />
                            })}

                        </div>
                        <div className=''>
                            <ul className='flex gap-[10px]'>
                                <li className='flex gap-[10px] small-info px-[14px] py-[6px] bg-primary-700 rounded-sm'>Freebies<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                <li className='flex gap-[10px] small-info px-[14px] py-[6px] bg-primary-700 rounded-sm'>Feature Products<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                <li className='flex gap-[10px] small-info px-[14px] py-[6px] bg-primary-700 rounded-sm'>Real Estate<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                <li className='flex gap-[10px] small-info px-[14px] py-[6px] bg-primary-700 rounded-sm'>Wordpress<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                                <li className='flex gap-[10px] small-info px-[14px] py-[6px] rounded-sm'>Clear all<Image src={filterCrossBtn} width={10} height={10} alt="Icon" className='' /></li>
                            </ul>
                            <button className='icon_btn medium-info flex gap-[10px] items-center px-5 py-2 border-[1px] border-divider-main'>
                                <span>  Sort by</span>
                                <svg className=''  xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                    <path d="M5.9467 7.33658C6.05638 7.33721 6.16509 7.31619 6.26663 7.27472C6.36816 7.23325 6.4605 7.17215 6.53837 7.09491L11.5384 2.09491C11.6953 1.93799 11.7834 1.72517 11.7834 1.50325C11.7834 1.28133 11.6953 1.0685 11.5384 0.91158C11.3815 0.754661 11.1686 0.666504 10.9467 0.666504C10.7248 0.666504 10.512 0.754661 10.355 0.91158L5.9467 5.32825L1.53837 0.919914C1.37895 0.783392 1.17389 0.712053 0.96416 0.720154C0.75443 0.728255 0.55548 0.815199 0.407068 0.963611C0.258657 1.11202 0.171714 1.31097 0.163612 1.5207C0.155512 1.73043 0.226849 1.9355 0.363371 2.09491L5.36337 7.09491C5.51859 7.24887 5.72809 7.33566 5.9467 7.33658Z" fill="#5D5775" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCollection