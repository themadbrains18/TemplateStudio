import React from 'react'

const TechnicalDetails = ({tabContent}) => {
    return (
        <>
            <div className={`${tabContent === 2 ? "block  pt-[20px] md:pt-[40px] xl:pt-[80px] mx-0 xl:mx-44" : "hidden "}`}>
                <h3 className='small-heading  mb-5'>Highlight</h3>
                <div className='px-[30px] md:px-[67px] py-5 md:py-10 border border-divider-light'>
                    <ul className='grid grid-cols-1 gap-[10px] md:grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                        <li className='list-disc main-info'>400+ Exclusive Pre-Built Templates</li>
                        <li className='list-disc main-info'>200+ Components</li>
                    </ul>
                    <ul className='grid grid-cols-1 gap-[10px] md:grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                        <li className='list-disc main-info'>Global Style guide Included</li>
                        <li className='list-disc main-info'>Fully Customizable & Responsive</li>
                    </ul>
                    <ul className='grid grid-cols-1 gap-[10px] md:grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                        <li className='list-disc main-info'>Glossy Light + Dark Mode</li>
                        <li className='list-disc main-info'>50+ Premium 3D Illustration</li>
                    </ul>
                    <ul className='grid grid-cols-1 gap-[10px] md:grid-cols-2'>
                        <li className='list-disc main-info'>Easy to edit & use</li>
                        <li className='list-disc main-info'>2 Type of Cards</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TechnicalDetails