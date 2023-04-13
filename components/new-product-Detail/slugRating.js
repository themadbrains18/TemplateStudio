import React from 'react'
import Image from 'next/image'

import star from 'public/icons/star.svg'
const SlugRating = () => {
    return (
        <>
            <section>
                <div className='big_container'>
                    <div className='flex justify-between items-center py-[42px] mb-5 border-b border-divider-main'>
                        <div className='main-info'><span className='pr-2'>Home</span>/ <span className='pl-2'>Products</span></div>
                        <div className='flex gap-[10px] items-center'>
                            <span>4.9</span>
                            <Image src={star} width={20} height={20} alt="Icon" className='' />
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mb-5'>
                        <Image src='/icons/tmb_icon.svg' width={30} height={30} alt="Image Error" className=''></Image>
                        <div className='flex gap-[10px] items-center'>
                            <p className='medium-heading text-[12px] md:text-[14px]'> <span className='font-open-sans text-[12px] md:text-[14px] text-light-text leading-5 font-normal pr-1'>By</span>themadbrains</p>
                            <span className='medium-heading text-[12px] md:text-[14px]'>UI templates</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SlugRating