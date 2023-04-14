import React from 'react'
import Image from 'next/image'

import star from 'public/icons/star.svg'
const SlugRating = () => {
    return (
        <>
            <section className='bg-back-white'>
                <div className='big_container'>
                    <div className='flex justify-between items-center py-[42px] border-b border-divider-main'>
                        <div className='main-info'><span className='pr-2'>Home</span>/ <span className='pl-2'>Products</span></div>
                        <div className='flex gap-[10px] items-center'>
                            <span>4.9</span>
                            <Image src={star} width={20} height={20} alt="Icon" className='' />
                        </div>
                    </div>

                 
                </div>
            </section>
        </>
    )
}

export default SlugRating