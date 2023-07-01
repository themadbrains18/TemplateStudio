import React from 'react'
import Image from 'next/image'

import star from 'public/icons/star.svg'
import rating from 'public/icons/rating.png'

import Link from 'next/link'
const SlugRating = () => {
    return (
        <>
            <section className='bg-back-white'>
                <div className='big_container'>
                    <div className='flex justify-between items-center py-[42px] border-b border-divider-main'>
                        <div className='main-info'><Link href="/" className='pr-2'>Home</Link>/ <span className='pl-2'>Products</span></div>
                        <div className=''>
                            <div className='rating flex gap-[10px] items-center cursor-pointer relative z-10 '>
                                <span>4.9</span>
                                <Image src={star} width={20} height={20} alt="Icon" className='' />
                            </div>
                            <div className='relative top-[-40px] right-[30%] z-0 flex gap-2 px-3 py-1 bg-[#5d5775] rounded-3xl rating_prod opacity-0 transition-300'>
                                <Image src={rating} width={12} height={12} alt='rating icon' className='w-[21px] h-[21px]'/>
                                <span className='text-white font-open-sans text-[14px] font-semibold'>Rate Product</span>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default SlugRating