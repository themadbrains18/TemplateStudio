import React from 'react'
import Image from 'next/image'
import publishedIcon from 'public/icons/watsNewIcon.svg'

const WhatsNew = ({tabContent}) => {
    return (
        <>
            <div className={`${tabContent === 4 ? "block mx-0 xl:mx-44 pt-[20px] md:pt-[40px] xl:pt-[80px]" : "hidden "}`}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mb-10'>
                    <div className='flex gap-[10px] md:gap-4 p-[10px] items-center md:py-4 md:px-5 md:items-start border border-divider-light '>
                        <Image src={publishedIcon} alt='icon' />
                        <div>
                            <p className='medium-heading mb-[10px]'>Published On</p>
                            <p className='main-info'>23/03/2022</p>
                        </div>
                    </div>
                    <div className='flex gap-[10px] md:gap-4 p-[10px] items-center md:py-4 md:px-5 md:items-start border border-divider-light '>
                        <Image src={publishedIcon} alt='icon' />
                        <div>
                            <p className='medium-heading mb-[10px]'>Last Update</p>
                            <p className='main-info'>23/03/2022</p>
                        </div>
                    </div>
                    <div className='flex gap-[10px] md:gap-4 p-[10px] items-center md:py-4 md:px-5 md:items-start border border-divider-light '>
                        <Image src={publishedIcon} alt='icon' />
                        <div>
                            <p className='medium-heading mb-[10px]'>Latest Version</p>
                            <p className='main-info'>1.0.0</p>
                        </div>
                    </div>
                </div>
                <h3 className='small-heading mb-5'>New Updates   </h3>
                <div className='px-[30px] md:px-[67px] py-5 md:py-10 border border-divider-light'>
                    <ul className='grid grid-cols-1 gap-[10px] md:grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                        <li className='list-disc main-info'>Vel, ultrices egestas tellus arcu orci.</li>
                        <li className='list-disc main-info'>Pulvinar vel scelerisque egestas vestibulum augue euismod.</li>
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

export default WhatsNew